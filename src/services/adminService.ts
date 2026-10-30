import { getDocs, orderBy, query } from 'firebase/firestore'
import { getNewsletterCollectionRef } from './newsletterService'
import { getQuizEntriesCollectionRef } from './quizEntryService'

export interface SubscriberRow {
  id: string
  emailNormalized: string
  name?: string
  consentStatus: string
  createdAt: Date | null
}

/**
 * Lista os inscritos na newsletter. Só retorna dados se o usuário
 * autenticado estiver autorizado pelas regras do Firestore (coleção
 * `cyberAprendiz_admins`) — caso contrário, o Firestore rejeita a
 * consulta com um erro de permissão, que é tratado pela camada de UI.
 */
export async function listNewsletterSubscribers(): Promise<SubscriberRow[]> {
  const q = query(getNewsletterCollectionRef(), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data()
    const createdAt =
      data.createdAt && typeof data.createdAt.toDate === 'function'
        ? data.createdAt.toDate()
        : null

    return {
      id: docSnap.id,
      emailNormalized: data.emailNormalized ?? docSnap.id,
      name: data.name,
      consentStatus: data.consentStatus ?? 'desconhecido',
      createdAt,
    }
  })
}

export interface QuizEntryRow {
  id: string
  emailNormalized: string
  name: string
  score: number
  totalQuestions: number
  createdAt: Date | null
}

/**
 * Lista os participantes do Quiz Premiado, ordenados pela maior pontuação
 * primeiro (ranking). Só retorna dados se o usuário autenticado estiver
 * autorizado pelas regras do Firestore (coleção `cyberAprendiz_admins`).
 */
export async function listQuizEntries(): Promise<QuizEntryRow[]> {
  const q = query(getQuizEntriesCollectionRef(), orderBy('score', 'desc'))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data()
    const createdAt =
      data.createdAt && typeof data.createdAt.toDate === 'function'
        ? data.createdAt.toDate()
        : null

    return {
      id: docSnap.id,
      emailNormalized: data.emailNormalized ?? docSnap.id,
      name: data.name ?? '—',
      score: data.score ?? 0,
      totalQuestions: data.totalQuestions ?? 0,
      createdAt,
    }
  })
}
