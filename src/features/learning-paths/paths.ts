import {
  ShieldQuestion,
  KeyRound,
  Fish,
  Lock,
  Smartphone,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'

/**
 * Dados estáticos (não persistidos no Firestore ainda) das trilhas de
 * aprendizagem. A estrutura foi pensada para espelhar o futuro modelo de
 * dados em `src/types/learning.ts`, facilitando a migração para o
 * Firestore quando o conteúdo for gerenciado dinamicamente.
 *
 * Apenas a trilha com `available: true` possui conteúdo e quiz real nesta
 * versão. As demais aparecem como "Em breve" na landing page.
 */
export interface LearningPathSummary {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  available: boolean
}

export const LEARNING_PATHS: LearningPathSummary[] = [
  {
    slug: 'fundamentos-da-seguranca-cibernetica',
    icon: ShieldQuestion,
    title: 'Fundamentos da segurança cibernética',
    description:
      'Conceitos essenciais para entender ameaças digitais e como se proteger.',
    available: true,
  },
  {
    slug: 'senhas-fortes-e-2fa',
    icon: KeyRound,
    title: 'Senhas fortes e autenticação em dois fatores',
    description:
      'Boas práticas para criar senhas seguras e ativar camadas extras de proteção.',
    available: false,
  },
  {
    slug: 'phishing-e-engenharia-social',
    icon: Fish,
    title: 'Phishing, engenharia social e golpes digitais',
    description:
      'Como reconhecer tentativas de golpe e mensagens fraudulentas.',
    available: false,
  },
  {
    slug: 'protecao-de-dados-e-privacidade',
    icon: Lock,
    title: 'Proteção de dados e privacidade',
    description:
      'Princípios para proteger informações pessoais no ambiente digital.',
    available: false,
  },
  {
    slug: 'navegacao-segura-e-dispositivos',
    icon: Smartphone,
    title: 'Navegação segura e dispositivos',
    description:
      'Cuidados ao navegar e configurar dispositivos móveis e computadores.',
    available: false,
  },
  {
    slug: 'seguranca-no-trabalho-e-nos-estudos',
    icon: Briefcase,
    title: 'Segurança no ambiente de trabalho e nos estudos',
    description:
      'Práticas recomendadas para proteger dados em contextos profissionais e acadêmicos.',
    available: false,
  },
]

export function getLearningPathBySlug(slug: string) {
  return LEARNING_PATHS.find((path) => path.slug === slug)
}
