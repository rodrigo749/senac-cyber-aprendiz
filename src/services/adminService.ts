import { getDocs, orderBy, query } from 'firebase/firestore'
import { getNewsletterCollectionRef } from './newsletterService'

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
