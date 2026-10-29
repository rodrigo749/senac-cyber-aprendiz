import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useAuth } from './useAuth'

/**
 * Protege rotas administrativas. A proteção "real" está nas regras do
 * Firestore (apenas UIDs presentes em `cyberAprendiz_admins` conseguem ler
 * a coleção de inscritos); este componente apenas evita que a tela
 * administrativa seja exibida para quem não está autenticado/autorizado,
 * melhorando a experiência do usuário.
 */
export function RequireAdmin({ children }: { children: ReactNode }) {
  const { user, isAdmin, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <main className="flex flex-1 items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" aria-hidden />
      </main>
    )
  }

  if (!user || !isAdmin) {
    return (
      <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
    )
  }

  return <>{children}</>
}
