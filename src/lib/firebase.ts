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
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getAuth, type Auth } from 'firebase/auth'

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
 *
 * IMPORTANTE: se as variáveis de ambiente VITE_FIREBASE_* não estiverem
 * definidas no ambiente de build (ex.: Vercel sem as env vars
 * configuradas), o Firebase NÃO deve ser inicializado — inicializar com
 * uma apiKey vazia/inválida lança `auth/invalid-api-key` e quebra a
 * aplicação inteira na primeira renderização. Por isso `app`, `db` e
 * `auth` abaixo podem ser `null`, e todo código que os usa deve checar
 * `isFirebaseConfigured` antes.
 */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
)

export const app: FirebaseApp | null = isFirebaseConfigured
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null

export const db: Firestore | null = app ? getFirestore(app) : null

export const auth: Auth | null = app ? getAuth(app) : null

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

/**
 * Nome da coleção do Firestore usada pelo "Quiz Premiado" para registrar
 * nome, e-mail e pontuação de cada participante.
 */
export const QUIZ_ENTRIES_COLLECTION =
  import.meta.env.VITE_FIREBASE_QUIZ_ENTRIES_COLLECTION ??
  'cyberAprendiz_quizEntries'
