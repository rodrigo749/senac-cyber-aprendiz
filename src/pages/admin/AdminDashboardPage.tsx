import { useEffect, useState } from 'react'
import { LogOut, Loader2, Users, ShieldAlert } from 'lucide-react'
import { useAuth } from '../../features/admin/useAuth'
import {
  listNewsletterSubscribers,
  type SubscriberRow,
} from '../../services/adminService'

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short',
})

export function AdminDashboardPage() {
  const { user, logout } = useAuth()
  const [subscribers, setSubscribers] = useState<SubscriberRow[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function load() {
      try {
        const data = await listNewsletterSubscribers()
        if (isMounted) setSubscribers(data)
      } catch {
        if (isMounted) {
          setError(
            'Não foi possível carregar a lista de inscritos. Verifique se você tem permissão de administrador.',
          )
        }
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    load()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="mx-auto flex-1 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold text-white">
              <Users className="h-6 w-6 text-senac" aria-hidden />
              Interessados cadastrados
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Autenticado como {user?.email}
            </p>
          </div>

          <button
            type="button"
            onClick={() => logout()}
            className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-senac hover:text-senac"
          >
            <LogOut className="h-4 w-4" aria-hidden />
            Sair
          </button>
        </div>

        {isLoading && (
          <div className="flex items-center gap-2 text-slate-400">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Carregando...
          </div>
        )}

        {error && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
          >
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {error}
          </p>
        )}

        {!isLoading && !error && (
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-900/80 text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Nome
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    E-mail
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Consentimento
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Cadastrado em
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {subscribers.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-6 text-center text-slate-500"
                    >
                      Nenhum interessado cadastrado ainda.
                    </td>
                  </tr>
                )}
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="bg-slate-950/40">
                    <td className="px-4 py-3 text-slate-200">
                      {subscriber.name ?? (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-200">
                      {subscriber.emailNormalized}
                    </td>
                    <td className="px-4 py-3 capitalize text-slate-300">
                      {subscriber.consentStatus === 'granted'
                        ? 'Consentido'
                        : subscriber.consentStatus}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {subscriber.createdAt
                        ? dateFormatter.format(subscriber.createdAt)
                        : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
