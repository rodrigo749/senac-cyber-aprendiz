import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import type { QuizQuestion } from './fundamentosQuiz'

interface QuizProps {
  questions: QuizQuestion[]
}

/**
 * Quiz de múltipla escolha com correção no cliente. Serve como reforço de
 * aprendizagem para a trilha ativa — não representa a gamificação "oficial"
 * com pontuação persistida (ver nota em fundamentosQuiz.ts).
 */
export function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = questions.every((q) => answers[q.id])
  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctOptionId,
  ).length

  function handleSelect(questionId: string, optionId: string) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  function handleReset() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="flex flex-col gap-6">
      {questions.map((question, index) => {
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
                const isCorrectOption =
                  submitted && option.id === question.correctOptionId
                const isWrongSelected =
                  submitted && isSelected && option.id !== question.correctOptionId

                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition ${
                      isCorrectOption
                        ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200'
                        : isWrongSelected
                          ? 'border-red-500/50 bg-red-500/10 text-red-200'
                          : isSelected
                            ? 'border-senac/60 bg-senac/10 text-slate-100'
                            : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={isSelected}
                      disabled={submitted}
                      onChange={() => handleSelect(question.id, option.id)}
                      className="h-4 w-4 shrink-0 text-senac focus:ring-senac"
                    />
                    <span>{option.label}</span>
                    {isCorrectOption && (
                      <CheckCircle2
                        className="ml-auto h-4 w-4 shrink-0 text-emerald-400"
                        aria-hidden
                      />
                    )}
                    {isWrongSelected && (
                      <XCircle
                        className="ml-auto h-4 w-4 shrink-0 text-red-400"
                        aria-hidden
                      />
                    )}
                  </label>
                )
              })}
            </div>

            {submitted && (
              <p
                role="status"
                className="mt-3 rounded-lg bg-slate-950/60 p-3 text-sm text-slate-300"
              >
                {selected === question.correctOptionId
                  ? 'Resposta correta! '
                  : 'Resposta incorreta. '}
                {question.explanation}
              </p>
            )}
          </fieldset>
        )
      })}

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        {submitted ? (
          <>
            <p className="font-medium text-slate-100" role="status">
              Você acertou {correctCount} de {questions.length} perguntas.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-senac hover:text-senac"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Refazer quiz
            </button>
          </>
        ) : (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="w-full rounded-lg bg-senac px-6 py-3 font-semibold text-white transition hover:bg-senac-light disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Corrigir respostas
          </button>
        )}
      </div>
    </div>
  )
}
