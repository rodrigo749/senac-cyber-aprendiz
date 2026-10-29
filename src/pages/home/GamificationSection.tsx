import { Trophy, Medal, TrendingUp, BarChart3, History } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'

const FEATURES = [
  {
    icon: Trophy,
    title: 'Pontuação por atividades concluídas',
    status: 'planejado' as const,
  },
  {
    icon: Medal,
    title: 'Medalhas por conquistas',
    status: 'planejado' as const,
  },
  {
    icon: TrendingUp,
    title: 'Níveis de aprendizagem',
    status: 'planejado' as const,
  },
  {
    icon: BarChart3,
    title: 'Indicadores de progresso',
    status: 'planejado' as const,
  },
  {
    icon: History,
    title: 'Histórico de atividades',
    status: 'planejado' as const,
  },
]

export function GamificationSection() {
  return (
    <section
      id="gamificacao"
      className="border-t border-slate-800 bg-slate-950/60 py-16"
      aria-labelledby="gamificacao-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="gamificacao-title"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Gamificação
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Recursos planejados para tornar o aprendizado mais engajador.
          Nenhum destes recursos está ativo nesta versão inicial.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title }) => (
            <Card key={title} className="flex items-center gap-4">
              <Icon className="h-8 w-8 shrink-0 text-senac" aria-hidden />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-slate-100">{title}</h3>
                <Badge tone="amber">Planejado</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
