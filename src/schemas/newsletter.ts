import { z } from 'zod'

/**
 * Schema de validação do formulário de cadastro na newsletter.
 * Usado no frontend (React Hook Form) e pode ser reaproveitado por uma
 * eventual Cloud Function para validar os dados no servidor.
 */
export const newsletterFormSchema = z.object({
  email: z
    .string({ message: 'Informe um e-mail.' })
    .trim()
    .min(1, 'Informe um e-mail.')
    .email('Informe um e-mail válido.'),
  name: z
    .string()
    .trim()
    .max(120, 'O nome deve ter no máximo 120 caracteres.')
    .optional()
    .or(z.literal('')),
  consent: z.boolean().refine((v) => v === true, {
    message: 'É necessário consentir para receber comunicações.',
  }),
})

export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>

/**
 * Normaliza um e-mail: remove espaços nas extremidades e converte para
 * minúsculas. Isso garante que "Teste@Gmail.com " e "teste@gmail.com"
 * sejam tratados como o mesmo cadastro, prevenindo duplicidade lógica.
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}
