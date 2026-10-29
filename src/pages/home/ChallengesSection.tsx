import { MessageCircleWarning, Fish, KeySquare, Puzzle, ListChecks } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'

const CHALLENGES = [
  {
    icon: MessageCircleWarning,
    title: 'Identificação de mensagens suspeitas',
    description:
      'Analise exemplos de mensagens e identifique sinais de golpe.',
  },
  {
    icon: Fish,
    title: 'Reconhecimento de tentativas de phishing',
    description: 'Aprenda a identificar e-mails e links fraudulentos.',
  },
  {
    icon: KeySquare,
    title: 'Escolha de senhas mais seguras',
    description: 'Pratique a criação de senhas fortes em cenários simulados.',
  },
  {
    icon: Puzzle,
    title: 'Situações-problema de segurança digital',
    description: 'Resolva casos práticos do dia a dia digital.',
  },
  {
    icon: ListChecks,
    title: 'Perguntas de múltipla escolha',
    description: 'Teste seus conhecimentos com quizzes educativos.',
  },
]

export function ChallengesSection() {
  return (
    <section
      id="desafios"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      aria-labelledby="desafios-title"
    >
      <h2
        id="desafios-title"
        className="text-2xl font-bold text-white sm:text-3xl"
      >
        Desafios interativos
      </h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        Tipos de atividades planejadas para a plataforma. Nenhuma simulação
        coleta senhas reais, dados bancários ou credenciais de terceiros.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="flex flex-col gap-3">
            <Icon className="h-8 w-8 text-senac" aria-hidden />
            <h3 className="font-semibold text-slate-100">{title}</h3>
            <p className="text-sm text-slate-400">{description}</p>
            <div className="mt-auto pt-2">
              <Badge tone="amber">Em breve</Badge>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
