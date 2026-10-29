/**
 * Módulo central de configuração do Firebase.
 *
 * Todas as variáveis vêm de variáveis de ambiente (prefixo VITE_),
 * conforme exigido pelo Vite para expor valores ao frontend.
 *
 * IMPORTANTE:
 * - Nunca coloque aqui Service Account, Admin SDK ou chaves privilegiadas.
 * - A apiKey do Firebase Web é pública por natureza (não é um segredo de
 *   backend), mas o acesso aos dados deve ser protegido pelas regras do
 *   Firestore, não pela ocultação dessa chave.
 * - A coleção usada pelo CyberAprendiz é isolada (ver NEWSLETTER_COLLECTION)
 *   para não colidir com outras aplicações que porventura usem o mesmo
 *   projeto Firebase.
 */
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

/**
 * Sinaliza se as variáveis mínimas para o Firebase funcionar foram
 * configuradas. Usado para exibir mensagens de erro amigáveis em vez de
 * quebrar a aplicação silenciosamente.
 */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
)

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)

/**
 * Nome da coleção do Firestore que autoriza usuários administradores.
 * O documento é identificado pelo UID do usuário autenticado (não pelo
 * e-mail), e seu conteúdo nunca é lido pelo frontend além de checar a
 * própria existência (ver firestore.rules e AuthContext).
 */
export const ADMINS_COLLECTION = 'cyberAprendiz_admins'

/**
 * Nome da coleção do Firestore usada exclusivamente pelo Senac CyberAprendiz
 * para armazenar os interessados na newsletter. Mantenha esse nome isolado
 * de outras aplicações que eventualmente compartilhem o mesmo projeto
 * Firebase.
 */
export const NEWSLETTER_COLLECTION =
  import.meta.env.VITE_FIREBASE_NEWSLETTER_COLLECTION ??
  'cyberAprendiz_newsletterSubscribers'
