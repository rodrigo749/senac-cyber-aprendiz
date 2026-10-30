import { z } from 'zod'

/**
 * Schema de validação do formulário de identificação do Quiz Premiado
 * (preenchido antes de iniciar as perguntas).
 */
export const quizEntryFormSchema = z.object({
  name: z
    .string({ message: 'Informe seu nome.' })
    .trim()
    .min(1, 'Informe seu nome.')
    .max(120, 'O nome deve ter no máximo 120 caracteres.'),
  email: z
    .string({ message: 'Informe um e-mail.' })
    .trim()
    .min(1, 'Informe um e-mail.')
    .email('Informe um e-mail válido.'),
})

export type QuizEntryFormSchema = z.infer<typeof quizEntryFormSchema>
