import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore'
import {
  db,
  QUIZ_ENTRIES_COLLECTION,
  QUIZ_PARTICIPANTS_COLLECTION,
  isFirebaseConfigured,
} from '../lib/firebase'
import { normalizeEmail } from '../schemas/newsletter'
import { QUIZ_CONSENT_POLICY_VERSION } from '../types/quizEntry'
import type { QuizEntryInput, QuizEntrySubmitResult } from '../types/quizEntry'

/**
 * Registra o resultado de um participante do Quiz Premiado.
 *
 * Estratégia de duplicidade: assim como na newsletter, o ID do documento é
 * o e-mail normalizado — cada e-mail só pode registrar uma participação,
 * evitando múltiplas tentativas para "forçar" uma pontuação melhor.
 */
export async function submitQuizEntry(
  input: QuizEntryInput,
): Promise<QuizEntrySubmitResult> {
  if (!isFirebaseConfigured || !db) {
    return {
      status: 'error',
      message: 'Cadastro indisponível no momento: configuração do Firebase pendente.',
    }
  }

  const emailNormalized = normalizeEmail(input.email)
  const trimmedName = input.name.trim()

  const docRef = doc(db, QUIZ_ENTRIES_COLLECTION, emailNormalized)

  try {
    // Grava participação e marcador atomicamente (as regras exigem ambos).
    const batch = writeBatch(db)
    batch.set(docRef, {
      emailNormalized,
      name: trimmedName,
      score: input.score,
      totalQuestions: input.totalQuestions,
      durationMs: Math.max(0, Math.round(input.durationMs)),
      consentPolicyVersion: QUIZ_CONSENT_POLICY_VERSION,
      source: 'quiz-premiado',
      createdAt: serverTimestamp(),
    })
    batch.set(doc(db, QUIZ_PARTICIPANTS_COLLECTION, emailNormalized), {
      createdAt: serverTimestamp(),
    })
    await batch.commit()

    return { status: 'success' }
  } catch (error) {
    if ((error as { code?: string })?.code === 'permission-denied') {
      return { status: 'duplicate' }
    }
    return {
      status: 'error',
      message:
        'Não foi possível registrar seu resultado agora. Tente novamente em instantes.',
    }
  }
}

/** Referência utilitária à coleção, útil para listagem administrativa. */
export function getQuizEntriesCollectionRef() {
  if (!db) {
    throw new Error('Firebase não configurado.')
  }
  return collection(db, QUIZ_ENTRIES_COLLECTION)
}

/**
 * Remove a participação de um e-mail no Quiz Premiado. Só funciona se o
 * usuário autenticado for administrador (ver firestore.rules) — caso
 * contrário, o Firestore rejeita a operação com erro de permissão.
 */
export async function deleteQuizEntry(emailId: string): Promise<void> {
  if (!db) {
    throw new Error('Firebase não configurado.')
  }
  await deleteDoc(doc(db, QUIZ_ENTRIES_COLLECTION, emailId))
  // Libera o e-mail para participar novamente.
  await deleteDoc(doc(db, QUIZ_PARTICIPANTS_COLLECTION, emailId))
}

/**
 * Verifica se o e-mail já participou do quiz. Em caso de falha na consulta,
 * não bloqueia o usuário (a gravação final ainda impede duplicidade).
 */
export async function hasEmailParticipated(email: string): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false
  try {
    const snap = await getDoc(
      doc(db, QUIZ_PARTICIPANTS_COLLECTION, normalizeEmail(email)),
    )
    return snap.exists()
  } catch {
    return false
  }
}
