/**
 * Tipos relacionados ao cadastro de interessados (newsletter).
 * Esta é a única funcionalidade com persistência real na primeira versão.
 */

/** Versão atual do texto de consentimento/política de privacidade. */
export const CONSENT_POLICY_VERSION = '2026-10-29'

export type ConsentStatus = 'granted' | 'revoked'

/** Documento armazenado na coleção de inscritos (Firestore). */
export interface NewsletterSubscriber {
  emailNormalized: string
  name?: string
  consentStatus: ConsentStatus
  consentTimestamp: unknown // serverTimestamp()
  consentPolicyVersion: string
  source: string
  createdAt: unknown // serverTimestamp()
  updatedAt: unknown // serverTimestamp()
}

/** Dados vindos do formulário, antes da normalização. */
export interface NewsletterFormInput {
  email: string
  name?: string
  consent: boolean
}

export type NewsletterSubmitResult =
  | { status: 'success' }
  | { status: 'duplicate' }
  | { status: 'error'; message: string }
