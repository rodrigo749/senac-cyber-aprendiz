import { Loader2, ShieldCheck, Mail } from 'lucide-react'
import { useNewsletterForm } from './useNewsletterForm'

/**
 * Formulário de cadastro na newsletter — funcionalidade prioritária da
 * primeira versão do Senac CyberAprendiz.
 */
export function NewsletterForm() {
  const { form, onSubmit, isSubmitting, submission } = useNewsletterForm()
  const {
    register,
    formState: { errors },
  } = form

  if (submission.kind === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center"
      >
        <ShieldCheck
          className="mx-auto mb-3 h-10 w-10 text-emerald-400"
          aria-hidden
        />
        <p className="text-lg font-medium text-emerald-300">
          Cadastro realizado com sucesso! Você receberá novidades do
          CyberAprendiz conforme suas preferências de comunicação.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
      aria-describedby="newsletter-form-description"
    >
      <p id="newsletter-form-description" className="sr-only">
        Formulário de cadastro de e-mail para receber novidades do Senac
        CyberAprendiz.
      </p>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          E-mail <span aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            aria-hidden
          />
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="seuemail@exemplo.com"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 py-2.5 pl-9 pr-3 text-slate-100 placeholder:text-slate-600 focus:border-senac focus:outline-none"
            {...register('email')}
          />
        </div>
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Nome <span className="text-slate-500">(opcional)</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          placeholder="Como podemos te chamar?"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 placeholder:text-slate-600 focus:border-senac focus:outline-none"
          {...register('name')}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
        <input
          id="consent"
          type="checkbox"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-900 text-senac focus:ring-senac"
          {...register('consent')}
        />
        <label htmlFor="consent" className="text-sm text-slate-300">
          Autorizo o recebimento de comunicações por e-mail sobre o
          lançamento e novidades do CyberAprendiz. Consulte a{' '}
          <a
            href="/privacidade"
            className="font-medium text-senac underline underline-offset-2 hover:text-senac-light"
          >
            Política de Privacidade
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" role="alert" className="text-sm text-red-400">
          {errors.consent.message}
        </p>
      )}

      {submission.kind === 'duplicate' && (
        <p role="alert" className="text-sm text-amber-400">
          Este e-mail já está cadastrado. Obrigado pelo interesse!
        </p>
      )}
      {submission.kind === 'error' && (
        <p role="alert" className="text-sm text-red-400">
          {submission.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-senac px-6 py-3 font-semibold text-white transition hover:bg-senac-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {isSubmitting ? 'Enviando...' : 'Quero participar'}
      </button>
    </form>
  )
}
