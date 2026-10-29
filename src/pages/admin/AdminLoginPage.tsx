import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Lock, Loader2, ShieldAlert } from 'lucide-react'
import { useAuth } from '../../features/admin/useAuth'

export function AdminLoginPage() {
  const { user, isAdmin, isLoading, login, isSubmitting, error } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (isLoading) {
    return (
      <main className="flex flex-1 items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" aria-hidden />
      </main>
    )
  }

  if (user && isAdmin) {
    const redirectTo =
      (location.state as { from?: string } | null)?.from ?? '/admin'
    return <Navigate to={redirectTo} replace />
  }

  return (
    <main className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-senac/15">
            <Lock className="h-5 w-5 text-senac" aria-hidden />
          </div>
          <h1 className="text-xl font-bold text-white">Área administrativa</h1>
        </div>

        {user && !isAdmin && (
          <p
            role="alert"
            className="mb-4 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300"
          >
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            Este usuário está autenticado, mas não tem permissão de
            administrador.
          </p>
        )}

        <form
          onSubmit={async (e) => {
            e.preventDefault()
            await login(email, password)
          }}
          className="flex flex-col gap-4"
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="admin-email" className="text-sm font-medium text-slate-200">
              E-mail
            </label>
            <input
              id="admin-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 focus:border-senac focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="admin-password" className="text-sm font-medium text-slate-200">
              Senha
            </label>
            <input
              id="admin-password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 focus:border-senac focus:outline-none"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-senac px-6 py-3 font-semibold text-white transition hover:bg-senac-light disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-500">
          Acesso restrito à equipe responsável pelo Senac CyberAprendiz. O
          usuário é criado no Console do Firebase; veja o README para
          instruções.
        </p>
      </div>
    </main>
  )
}
