import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db, NEWSLETTER_COLLECTION, isFirebaseConfigured } from '../lib/firebase'
import { normalizeEmail } from '../schemas/newsletter'
import { CONSENT_POLICY_VERSION } from '../types/newsletter'
import type {
  NewsletterFormInput,
  NewsletterSubmitResult,
} from '../types/newsletter'

/**
 * Cadastra um interessado na newsletter do Senac CyberAprendiz.
 *
 * Estratégia de duplicidade:
 * - O ID do documento é o próprio e-mail normalizado. Isso impede, pelas
 *   regras do Firestore (ver firestore.rules), que o mesmo e-mail seja
 *   gravado duas vezes — a regra autoriza "create" apenas se o documento
 *   ainda não existir.
 * - Antes de tentar criar, fazemos uma leitura do documento específico
 *   (não uma listagem da coleção) para oferecer uma mensagem amigável de
 *   "já cadastrado" sem expor dados de outros usuários.
 *
 * Limitação atual: como não há Cloud Function neste MVP, a validação final
 * depende das regras do Firestore. Veja o README para o plano de evolução
 * com uma função de backend (rate limiting, normalização adicional etc.).
 */
export async function subscribeToNewsletter(
  input: NewsletterFormInput,
): Promise<NewsletterSubmitResult> {
  if (!isFirebaseConfigured || !db) {
    return {
      status: 'error',
      message: 'Cadastro indisponível no momento: configuração do Firebase pendente.',
    }
  }

  const emailNormalized = normalizeEmail(input.email)
  const trimmedName = input.name?.trim()

  const docRef = doc(db, NEWSLETTER_COLLECTION, emailNormalized)

  try {
    const existing = await getDoc(docRef)
    if (existing.exists()) {
      return { status: 'duplicate' }
    }

    await setDoc(docRef, {
      emailNormalized,
      ...(trimmedName ? { name: trimmedName } : {}),
      consentStatus: 'granted',
      consentTimestamp: serverTimestamp(),
      consentPolicyVersion: CONSENT_POLICY_VERSION,
      source: 'landing-page',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })

    // Confirma a persistência antes de informar sucesso ao usuário.
    const confirmation = await getDoc(docRef)
    if (!confirmation.exists()) {
      return {
        status: 'error',
        message:
          'Não foi possível confirmar o cadastro. Tente novamente em instantes.',
      }
    }

    return { status: 'success' }
  } catch {
    // Nunca expor detalhes internos do Firebase/erro ao usuário final.
    return {
      status: 'error',
      message:
        'Não foi possível concluir o cadastro agora. Tente novamente em instantes.',
    }
  }
}

/** Referência utilitária à coleção, útil para testes. */
export function getNewsletterCollectionRef() {
  if (!db) {
    throw new Error('Firebase não configurado.')
  }
  return collection(db, NEWSLETTER_COLLECTION)
}
