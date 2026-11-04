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
  durationMs: number | null
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

  const rows = snapshot.docs.map((docSnap) => {
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
      durationMs: typeof data.durationMs === 'number' ? data.durationMs : null,
      createdAt,
    }
  })

  // Ranking: mais acertos primeiro; empate decidido pelo menor tempo.
  return rows.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    const ta = a.durationMs ?? Number.POSITIVE_INFINITY
    const tb = b.durationMs ?? Number.POSITIVE_INFINITY
    return ta - tb
  })
}

/** Formata milissegundos como "mm:ss" (ou "h:mm:ss"). */
export function formatDuration(ms: number | null): string {
  if (ms === null) return '—'
  const total = Math.round(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
}
