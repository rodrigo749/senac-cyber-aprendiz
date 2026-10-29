import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  newsletterFormSchema,
  type NewsletterFormSchema,
} from '../../schemas/newsletter'
import { subscribeToNewsletter } from '../../services/newsletterService'
import { isFirebaseConfigured } from '../../lib/firebase'

type SubmissionState =
  | { kind: 'idle' }
  | { kind: 'success' }
  | { kind: 'duplicate' }
  | { kind: 'error'; message: string }

/**
 * Hook com toda a lógica de negócio do formulário de cadastro na
 * newsletter: validação, chamada ao serviço, estados de carregamento e
 * tratamento de duplicidade/erros. O componente visual apenas consome
 * este hook.
 */
export function useNewsletterForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    kind: 'idle',
  })

  const form = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: '', name: '', consent: false },
  })

  const { handleSubmit, formState } = form
  const isSubmitting = formState.isSubmitting

  const onSubmit = handleSubmit(async (values) => {
    if (!isFirebaseConfigured) {
      setSubmission({
        kind: 'error',
        message:
          'Cadastro indisponível no momento: configuração do Firebase pendente.',
      })
      return
    }

    setSubmission({ kind: 'idle' })

    const result = await subscribeToNewsletter({
      email: values.email,
      name: values.name,
      consent: values.consent,
    })

    if (result.status === 'success') {
      setSubmission({ kind: 'success' })
      form.reset()
      return
    }

    if (result.status === 'duplicate') {
      setSubmission({ kind: 'duplicate' })
      // Não limpa o formulário em caso de "erro"/duplicidade.
      return
    }

    setSubmission({ kind: 'error', message: result.message })
  })

  return { form, onSubmit, isSubmitting, submission }
}
