/**
 * Tipos de domínio para funcionalidades FUTURAS (trilhas, módulos, desafios,
 * progresso e conquistas). Nada aqui é persistido ainda — servem apenas para
 * preparar a arquitetura e documentar o modelo de dados planejado, conforme
 * descrito no README.
 */

export type DifficultyLevel = 'iniciante' | 'intermediario' | 'avancado'
export type PublicationStatus = 'rascunho' | 'publicado'

/** Trilha de aprendizagem (futuro). */
export interface LearningPath {
  id: string
  title: string
  description: string
  category: string
  difficulty: DifficultyLevel
  order: number
  status: PublicationStatus
  moduleIds: string[]
}

/** Módulo/lição dentro de uma trilha (futuro). */
export interface LearningModule {
  id: string
  pathId: string
  title: string
  content: string
  objectives: string[]
  order: number
  estimatedMinutes: number
  resources: string[]
  status: PublicationStatus
}

/**
 * Desafio/quiz (futuro). O campo `correctOptionId` e `explanation` NUNCA
 * devem ser enviados ao cliente antes da submissão da resposta — a
 * validação correta deve ocorrer em uma função de backend confiável.
 */
export interface Challenge {
  id: string
  prompt: string
  options: { id: string; label: string }[]
  difficulty: DifficultyLevel
  category: string
  points: number
}

/** Progresso do usuário (futuro, depende de autenticação). */
export interface UserProgress {
  userId: string
  completedLessonIds: string[]
  completedChallengeIds: string[]
  score: number
  updatedAt: unknown
}

/** Conquista/medalha (futuro). */
export interface Achievement {
  id: string
  name: string
  description: string
  unlockCriteria: string
  icon: string
  points?: number
}
