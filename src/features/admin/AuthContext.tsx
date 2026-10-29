import {
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db, ADMINS_COLLECTION } from '../../lib/firebase'
import { AuthContext } from './authContextDefinition'

/**
 * Contexto de autenticação da área administrativa.
 *
 * Importante (segurança):
 * - A autorização de administrador NÃO é um estado local do React nem uma
 *   lista de e-mails no código-fonte. Um usuário só é considerado admin se
 *   existir um documento com seu UID na coleção `cyberAprendiz_admins` no
 *   Firestore — a mesma verificação é espelhada nas regras de segurança
 *   (firestore.rules), que são a barreira real de proteção dos dados.
 * - O frontend consulta esse documento apenas para decidir o que mostrar
 *   na interface (UX). Mesmo que alguém manipule o estado do React, as
 *   regras do Firestore continuarão bloqueando a leitura da coleção de
 *   inscritos para quem não for admin.
 * - Nenhuma credencial fixa fica no código. O usuário e senha são criados
 *   no Console do Firebase (Authentication) e o acesso administrativo é
 *   concedido criando o documento correspondente em `cyberAprendiz_admins`.
 */

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)

      if (!firebaseUser) {
        setIsAdmin(false)
        setIsLoading(false)
        return
      }

      try {
        const adminDoc = await getDoc(
          doc(db, ADMINS_COLLECTION, firebaseUser.uid),
        )
        setIsAdmin(adminDoc.exists())
      } catch {
        setIsAdmin(false)
      } finally {
        setIsLoading(false)
      }
    })

    return unsubscribe
  }, [])

  async function login(email: string, password: string): Promise<boolean> {
    setIsSubmitting(true)
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password)
      return true
    } catch {
      // Mensagem genérica — não revela se o e-mail existe ou não.
      setError('E-mail ou senha inválidos.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  async function logout() {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, isLoading, error, isSubmitting, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
