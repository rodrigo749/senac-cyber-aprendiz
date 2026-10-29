import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import { getLearningPathBySlug } from '../features/learning-paths/paths'
import { Quiz } from '../features/learning-paths/Quiz'

export function LearningPathPage() {
  const { slug } = useParams<{ slug: string }>()
  const path = slug ? getLearningPathBySlug(slug) : undefined

  if (!path) {
    return <Navigate to="/" replace />
  }

  if (!path.available || !path.lesson || !path.quiz) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-white">{path.title}</h1>
        <p className="mt-4 text-slate-300">
          Esta trilha ainda está em desenvolvimento e será disponibilizada em
          uma próxima versão do Senac CyberAprendiz.
        </p>
        <Link
          to="/#trilhas"
          className="mt-6 inline-flex items-center gap-2 text-senac hover:text-senac-light"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar para as
          trilhas
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        to="/#trilhas"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-senac"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar para as trilhas
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-white">{path.title}</h1>
      <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
        <Clock className="h-4 w-4" aria-hidden /> Tempo estimado de leitura:{' '}
        {path.estimatedMinutes ?? 5} minutos
      </p>

      <div className="mt-8 flex flex-col gap-8">
        {path.lesson.map((block) => (
          <section key={block.heading}>
            <h2 className="text-xl font-semibold text-slate-100">
              {block.heading}
            </h2>
            <div className="mt-2 flex flex-col gap-2">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12" aria-labelledby="quiz-title">
        <h2 id="quiz-title" className="text-xl font-semibold text-slate-100">
          Teste seus conhecimentos
        </h2>
        <p className="mt-2 text-slate-400">
          Responda às perguntas abaixo para reforçar o que você aprendeu
          nesta trilha.
        </p>
        <div className="mt-6">
          <Quiz questions={path.quiz} key={path.slug} />
        </div>
      </section>
    </main>
  )
}
