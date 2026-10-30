import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trophy, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { quizEntryFormSchema, type QuizEntryFormSchema } from '../../schemas/quizEntry'
import { submitQuizEntry } from '../../services/quizEntryService'
import { PREMIADO_QUIZ } from './premiadoQuiz'

type Step = 'form' | 'quiz' | 'done'

/**
 * Página do "Quiz Premiado": coleta nome/e-mail, aplica um quiz de múltipla
 * escolha sobre as trilhas do CyberAprendiz e registra a pontuação no
 * Firestore para apuração de um ranking pelo painel administrativo.
 */
export function QuizPremiadoPage() {
  const [step, setStep] = useState<Step>('form')
  const [entry, setEntry] = useState<QuizEntryFormSchema | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizEntryFormSchema>({
    resolver: zodResolver(quizEntryFormSchema),
  })

  function onStart(data: QuizEntryFormSchema) {
    setEntry(data)
    setStep('quiz')
  }

  function handleSelect(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  const allAnswered = PREMIADO_QUIZ.every((q) => answers[q.id])

  async function handleFinish() {
    if (!entry) return

    const score = PREMIADO_QUIZ.filter(
      (q) => answers[q.id] === q.correctOptionId,
    ).length

    setIsSubmitting(true)
    setSubmitError(null)

    const result = await submitQuizEntry({
      name: entry.name,
      email: entry.email,
      score,
      totalQuestions: PREMIADO_QUIZ.length,
    })

    setIsSubmitting(false)

    if (result.status === 'success') {
      setFinalScore(score)
      setStep('done')
    } else if (result.status === 'duplicate') {
      setSubmitError('Este e-mail já participou do Quiz Premiado anteriormente.')
    } else {
      setSubmitError(result.message)
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex items-center gap-3">
        <Trophy className="h-8 w-8 text-senac" aria-hidden />
        <h1 className="text-3xl font-bold text-white">Quiz Premiado</h1>
      </div>
      <p className="mb-8 text-slate-300">
        Teste seus conhecimentos sobre segurança cibernética e concorra a um
        prêmio! Responda nome, e-mail e as perguntas abaixo — quem tiver a
        maior pontuação será contatado pela organização.
      </p>

      {step === 'form' && (
        <form
          onSubmit={handleSubmit(onStart)}
          className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <div>
            <label htmlFor="quiz-name" className="mb-1 block text-sm font-medium text-slate-200">
              Nome
            </label>
            <input
              id="quiz-name"
              type="text"
              {...register('name')}
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-slate-100 focus:border-senac focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quiz-email" className="mb-1 block text-sm font-medium text-slate-200">
              E-mail
            </label>
            <input
              id="quiz-email"
              type="email"
              {...register('email')}
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-slate-100 focus:border-senac focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-senac px-6 py-3 font-semibold text-white transition hover:bg-senac-light sm:w-auto"
          >
            Começar o quiz
          </button>
        </form>
      )}

      {step === 'quiz' && (
        <div className="flex flex-col gap-6">
          {PREMIADO_QUIZ.map((question, index) => {
            const selected = answers[question.id]
            return (
              <fieldset
                key={question.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <legend className="px-1 font-medium text-slate-100">
                  {index + 1}. {question.prompt}
                </legend>
                <div className="mt-3 flex flex-col gap-2">
                  {question.options.map((option) => {
                    const isSelected = selected === option.id
                    return (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition ${
                          isSelected
                            ? 'border-senac/60 bg-senac/10 text-slate-100'
                            : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.id}
                          checked={isSelected}
                          onChange={() => handleSelect(question.id, option.id)}
                          className="h-4 w-4 shrink-0 text-senac focus:ring-senac"
                        />
                        <span>{option.label}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>
            )
          })}

          {submitError && (
            <p
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {submitError}
            </p>
          )}

          <button
            type="button"
            disabled={!allAnswered || isSubmitting}
            onClick={handleFinish}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-senac px-6 py-3 font-semibold text-white transition hover:bg-senac-light disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
            Enviar respostas
          </button>
        </div>
      )}

      {step === 'done' && (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
          <CheckCircle2 className="h-12 w-12 text-emerald-400" aria-hidden />
          <h2 className="text-xl font-semibold text-white">
            Obrigado por participar, {entry?.name}!
          </h2>
          <p className="text-slate-200">
            Você acertou {finalScore} de {PREMIADO_QUIZ.length} perguntas.
          </p>
          <p className="text-sm text-slate-400">
            O resultado foi registrado. Fique de olho no seu e-mail — quem
            tiver a maior pontuação será contatado pela organização.
          </p>
        </div>
      )}
    </main>
  )
}
