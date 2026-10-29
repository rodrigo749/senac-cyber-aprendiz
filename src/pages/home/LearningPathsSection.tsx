import {
  ShieldQuestion,
  KeyRound,
  Fish,
  Lock,
  Smartphone,
  Briefcase,
} from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'

const PATHS = [
  {
    icon: ShieldQuestion,
    title: 'Fundamentos da segurança cibernética',
    description:
      'Conceitos essenciais para entender ameaças digitais e como se proteger.',
  },
  {
    icon: KeyRound,
    title: 'Senhas fortes e autenticação em dois fatores',
    description:
      'Boas práticas para criar senhas seguras e ativar camadas extras de proteção.',
  },
  {
    icon: Fish,
    title: 'Phishing, engenharia social e golpes digitais',
    description:
      'Como reconhecer tentativas de golpe e mensagens fraudulentas.',
  },
  {
    icon: Lock,
    title: 'Proteção de dados e privacidade',
    description:
      'Princípios para proteger informações pessoais no ambiente digital.',
  },
  {
    icon: Smartphone,
    title: 'Navegação segura e dispositivos',
    description:
      'Cuidados ao navegar e configurar dispositivos móveis e computadores.',
  },
  {
    icon: Briefcase,
    title: 'Segurança no ambiente de trabalho e nos estudos',
    description:
      'Práticas recomendadas para proteger dados em contextos profissionais e acadêmicos.',
  },
]

export function LearningPathsSection() {
  return (
    <section
      id="trilhas"
      className="border-t border-slate-800 bg-slate-950/60 py-16"
      aria-labelledby="trilhas-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="trilhas-title"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Trilhas de aprendizagem
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Conteúdos planejados para a plataforma. As trilhas serão ativadas
          progressivamente conforme forem desenvolvidas.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PATHS.map(({ icon: Icon, title, description }) => (
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
      </div>
    </section>
  )
}
