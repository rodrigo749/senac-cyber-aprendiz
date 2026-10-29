#!/usr/bin/env node
/**
 * Concede acesso administrativo ao painel do Senac CyberAprendiz.
 *
 * Uso:
 *   node grant-admin.mjs <UID_OU_EMAIL_DO_USUARIO>
 *
 * Aceita tanto o UID do usuário quanto o e-mail cadastrado no Firebase
 * Authentication (o script resolve o e-mail para UID automaticamente).
 *
 * Requer o arquivo serviceAccountKey.json nesta mesma pasta (veja README.md
 * para instruções de como obtê-lo). Este script usa o Admin SDK, que tem
 * privilégios totais sobre o Firestore — rode-o apenas localmente, nunca
 * no frontend.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ADMINS_COLLECTION = 'cyberAprendiz_admins'

const identifier = process.argv[2]

if (!identifier) {
  console.error('Uso: node grant-admin.mjs <UID_OU_EMAIL_DO_USUARIO>')
  console.error(
    'Obtenha o UID/e-mail em: Console do Firebase > Authentication > Users',
  )
  process.exit(1)
}

let serviceAccount
try {
  const keyPath = join(__dirname, 'serviceAccountKey.json')
  serviceAccount = JSON.parse(readFileSync(keyPath, 'utf-8'))
} catch {
  console.error(
    'Não foi possível ler scripts/serviceAccountKey.json. Siga as ' +
      'instruções no README.md desta pasta para gerar esse arquivo.',
  )
  process.exit(1)
}

initializeApp({ credential: cert(serviceAccount) })
const db = getFirestore()
const auth = getAuth()

async function resolveUid(value) {
  if (!value.includes('@')) {
    return value
  }

  const userRecord = await auth.getUserByEmail(value)
  return userRecord.uid
}

async function main() {
  const uid = await resolveUid(identifier)

  const docRef = db.collection(ADMINS_COLLECTION).doc(uid)
  const existing = await docRef.get()

  if (existing.exists) {
    console.log(`O UID "${uid}" já é administrador. Nenhuma ação necessária.`)
    return
  }

  await docRef.set({
    grantedAt: Timestamp.now(),
  })

  console.log(`✅ Acesso administrativo concedido ao UID "${uid}".`)
  console.log('Agora é possível fazer login em /admin/login com esse usuário.')
}

main().catch((error) => {
  console.error('Erro ao conceder acesso administrativo:', error.message)
  process.exit(1)
})
