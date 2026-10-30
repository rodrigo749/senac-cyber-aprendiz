/**
 * Tipos relacionados ao "Quiz Premiado" — participantes respondem a um
 * conjunto de perguntas de múltipla escolha e a pontuação é registrada no
 * Firestore para permitir a apuração de um ranking pelo painel
 * administrativo.
 */

/** Versão atual do texto de consentimento/política de privacidade. */
export const QUIZ_CONSENT_POLICY_VERSION = '2026-10-29'

/** Documento armazenado na coleção de participantes do quiz (Firestore). */
export interface QuizEntry {
  emailNormalized: string
  name: string
  score: number
  totalQuestions: number
  consentPolicyVersion: string
  source: string
  createdAt: unknown // serverTimestamp()
}

/** Dados vindos do formulário, antes da normalização. */
export interface QuizEntryInput {
  email: string
  name: string
  score: number
  totalQuestions: number
}

export type QuizEntrySubmitResult =
  | { status: 'success' }
  | { status: 'duplicate' }
  | { status: 'error'; message: string }
