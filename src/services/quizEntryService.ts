import {
  collection,
  doc,
  getDoc,
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
    const existing = await getDoc(docRef)
    if (existing.exists()) {
      return { status: 'duplicate' }
    }

    await setDoc(docRef, {
      emailNormalized,
      name: trimmedName,
      score: input.score,
      totalQuestions: input.totalQuestions,
      consentPolicyVersion: QUIZ_CONSENT_POLICY_VERSION,
      source: 'quiz-premiado',
      createdAt: serverTimestamp(),
    })

    const confirmation = await getDoc(docRef)
    if (!confirmation.exists()) {
      return {
        status: 'error',
        message:
          'Não foi possível confirmar seu resultado. Tente novamente em instantes.',
      }
    }

    return { status: 'success' }
  } catch {
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
