import { useEffect, useState } from 'react'
import { LogOut, Loader2, Users, ShieldAlert, Trophy, Trash2 } from 'lucide-react'
import { useAuth } from '../../features/admin/useAuth'
import {
  listNewsletterSubscribers,
  listQuizEntries,
  formatDuration,
  type SubscriberRow,
  type QuizEntryRow,
} from '../../services/adminService'
import { deleteQuizEntry } from '../../services/quizEntryService'

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short',
})

type Tab = 'subscribers' | 'quiz'

export function AdminDashboardPage() {
  const { user, logout } = useAuth()
  const [tab, setTab] = useState<Tab>('subscribers')

  const [subscribers, setSubscribers] = useState<SubscriberRow[]>([])
  const [isLoadingSubscribers, setIsLoadingSubscribers] = useState(true)
  const [subscribersError, setSubscribersError] = useState<string | null>(null)

  const [quizEntries, setQuizEntries] = useState<QuizEntryRow[]>([])
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(true)
  const [quizError, setQuizError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function load() {
      try {
        const data = await listNewsletterSubscribers()
        if (isMounted) setSubscribers(data)
      } catch {
        if (isMounted) {
          setSubscribersError(
            'Não foi possível carregar a lista de inscritos. Verifique se você tem permissão de administrador.',
          )
        }
      } finally {
        if (isMounted) setIsLoadingSubscribers(false)
      }
    }

    load()
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    async function load() {
      try {
        const data = await listQuizEntries()
        if (isMounted) setQuizEntries(data)
      } catch {
        if (isMounted) {
          setQuizError(
            'Não foi possível carregar o ranking do Quiz Premiado. Verifique se você tem permissão de administrador.',
          )
        }
      } finally {
        if (isMounted) setIsLoadingQuiz(false)
      }
    }

    load()
    return () => {
      isMounted = false
    }
  }, [])

  async function handleDeleteQuizEntry(id: string, name: string) {
    const confirmed = window.confirm(
      `Remover a participação de "${name}" do Quiz Premiado? Esta ação não pode ser desfeita.`,
    )
    if (!confirmed) return

    setDeletingId(id)
    try {
      await deleteQuizEntry(id)
      setQuizEntries((prev) => prev.filter((entry) => entry.id !== id))
    } catch {
      window.alert('Não foi possível remover este participante. Tente novamente.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <main className="mx-auto flex-1 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold text-white">
              <Users className="h-6 w-6 text-senac" aria-hidden />
              Área administrativa
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

        <div className="mb-6 flex gap-2 border-b border-slate-800">
          <button
            type="button"
            onClick={() => setTab('subscribers')}
            className={`inline-flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-semibold transition ${
              tab === 'subscribers'
                ? 'border-senac text-senac'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="h-4 w-4" aria-hidden />
            Interessados cadastrados
          </button>
          <button
            type="button"
            onClick={() => setTab('quiz')}
            className={`inline-flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-semibold transition ${
              tab === 'quiz'
                ? 'border-senac text-senac'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Trophy className="h-4 w-4" aria-hidden />
            Quiz Premiado
          </button>
        </div>

        {tab === 'subscribers' && (
          <>
            {isLoadingSubscribers && (
              <div className="flex items-center gap-2 text-slate-400">
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                Carregando...
              </div>
            )}

            {subscribersError && (
              <p
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              >
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {subscribersError}
              </p>
            )}

            {!isLoadingSubscribers && !subscribersError && (
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
          </>
        )}

        {tab === 'quiz' && (
          <>
            {isLoadingQuiz && (
              <div className="flex items-center gap-2 text-slate-400">
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                Carregando...
              </div>
            )}

            {quizError && (
              <p
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              >
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {quizError}
              </p>
            )}

            {!isLoadingQuiz && !quizError && (
              <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-slate-900/80 text-slate-400">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-medium">
                        #
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        Nome
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        E-mail
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        Pontuação
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        Tempo gasto
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        Respondido em
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {quizEntries.length === 0 && (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-6 text-center text-slate-500"
                        >
                          Ninguém respondeu o Quiz Premiado ainda.
                        </td>
                      </tr>
                    )}
                    {quizEntries.map((entry, index) => (
                      <tr key={entry.id} className="bg-slate-950/40">
                        <td className="px-4 py-3 text-slate-400">{index + 1}º</td>
                        <td className="px-4 py-3 text-slate-200">
                          {index === 0 && entry.score > 0 && (
                            <Trophy
                              className="mr-1 inline h-4 w-4 text-yellow-400"
                              aria-hidden
                            />
                          )}
                          {entry.name}
                        </td>
                        <td className="px-4 py-3 text-slate-200">
                          {entry.emailNormalized}
                        </td>
                        <td className="px-4 py-3 font-semibold text-slate-100">
                          {entry.score} / {entry.totalQuestions}
                        </td>
                        <td className="px-4 py-3 font-mono text-slate-200">
                          {formatDuration(entry.durationMs)}
                        </td>
                        <td className="px-4 py-3 text-slate-400">
                          {entry.createdAt
                            ? dateFormatter.format(entry.createdAt)
                            : '—'}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            disabled={deletingId === entry.id}
                            onClick={() => handleDeleteQuizEntry(entry.id, entry.name)}
                            className="inline-flex items-center gap-1 rounded-lg border border-red-500/30 px-2 py-1 text-xs font-semibold text-red-300 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId === entry.id ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                            ) : (
                              <Trash2 className="h-3.5 w-3.5" aria-hidden />
                            )}
                            Excluir
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}

