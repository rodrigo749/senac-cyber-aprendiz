import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db, QUIZ_ENTRIES_COLLECTION, isFirebaseConfigured } from '../lib/firebase'
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
    // Sem leitura prévia: as regras negam "read" a não administradores.
    await setDoc(docRef, {
      emailNormalized,
      name: trimmedName,
      score: input.score,
      totalQuestions: input.totalQuestions,
      durationMs: Math.max(0, Math.round(input.durationMs)),
      consentPolicyVersion: QUIZ_CONSENT_POLICY_VERSION,
      source: 'quiz-premiado',
      createdAt: serverTimestamp(),
    })

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
}
