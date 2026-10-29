import {
  ShieldQuestion,
  KeyRound,
  Fish,
  Lock,
  Smartphone,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import { FUNDAMENTOS_LESSON } from './fundamentosContent'
import { FUNDAMENTOS_QUIZ } from './fundamentosQuiz'
import { SENHAS_2FA_LESSON } from './senhas2faContent'
import { SENHAS_2FA_QUIZ } from './senhas2faQuiz'
import { PHISHING_LESSON } from './phishingContent'
import { PHISHING_QUIZ } from './phishingQuiz'
import { PRIVACIDADE_LESSON } from './privacidadeContent'
import { PRIVACIDADE_QUIZ } from './privacidadeQuiz'
import { NAVEGACAO_LESSON } from './navegacaoContent'
import { NAVEGACAO_QUIZ } from './navegacaoQuiz'
import { TRABALHO_LESSON } from './trabalhoContent'
import { TRABALHO_QUIZ } from './trabalhoQuiz'
import type { LessonBlock } from './fundamentosContent'
import type { QuizQuestion } from './fundamentosQuiz'

/**
 * Dados estáticos (não persistidos no Firestore ainda) das trilhas de
 * aprendizagem. A estrutura foi pensada para espelhar o futuro modelo de
 * dados em `src/types/learning.ts`, facilitando a migração para o
 * Firestore quando o conteúdo for gerenciado dinamicamente.
 *
 * Todas as trilhas já possuem conteúdo e quiz reais nesta versão.
 */
export interface LearningPathSummary {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  available: boolean
  lesson: LessonBlock[]
  quiz: QuizQuestion[]
}

export const LEARNING_PATHS: LearningPathSummary[] = [
  {
    slug: 'fundamentos-da-seguranca-cibernetica',
    icon: ShieldQuestion,
    title: 'Fundamentos da segurança cibernética',
    description:
      'Conceitos essenciais para entender ameaças digitais e como se proteger.',
    available: true,
    lesson: FUNDAMENTOS_LESSON,
    quiz: FUNDAMENTOS_QUIZ,
  },
  {
    slug: 'senhas-fortes-e-2fa',
    icon: KeyRound,
    title: 'Senhas fortes e autenticação em dois fatores',
    description:
      'Boas práticas para criar senhas seguras e ativar camadas extras de proteção.',
    available: true,
    lesson: SENHAS_2FA_LESSON,
    quiz: SENHAS_2FA_QUIZ,
  },
  {
    slug: 'phishing-e-engenharia-social',
    icon: Fish,
    title: 'Phishing, engenharia social e golpes digitais',
    description:
      'Como reconhecer tentativas de golpe e mensagens fraudulentas.',
    available: true,
    lesson: PHISHING_LESSON,
    quiz: PHISHING_QUIZ,
  },
  {
    slug: 'protecao-de-dados-e-privacidade',
    icon: Lock,
    title: 'Proteção de dados e privacidade',
    description:
      'Princípios para proteger informações pessoais no ambiente digital.',
    available: true,
    lesson: PRIVACIDADE_LESSON,
    quiz: PRIVACIDADE_QUIZ,
  },
  {
    slug: 'navegacao-segura-e-dispositivos',
    icon: Smartphone,
    title: 'Navegação segura e dispositivos',
    description:
      'Cuidados ao navegar e configurar dispositivos móveis e computadores.',
    available: true,
    lesson: NAVEGACAO_LESSON,
    quiz: NAVEGACAO_QUIZ,
  },
  {
    slug: 'seguranca-no-trabalho-e-nos-estudos',
    icon: Briefcase,
    title: 'Segurança no ambiente de trabalho e nos estudos',
    description:
      'Práticas recomendadas para proteger dados em contextos profissionais e acadêmicos.',
    available: true,
    lesson: TRABALHO_LESSON,
    quiz: TRABALHO_QUIZ,
  },
]

export function getLearningPathBySlug(slug: string) {
  return LEARNING_PATHS.find((path) => path.slug === slug)
}
