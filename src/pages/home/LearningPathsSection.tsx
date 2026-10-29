import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { LEARNING_PATHS } from '../../features/learning-paths/paths'

export function LearningPathsSection() {
  return (
    <section
      id="trilhas"
      className="border-t border-slate-800 bg-slate-950/60 py-16"
      aria-labelledby="trilhas-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="trilhas-title"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Trilhas de aprendizagem
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Conteúdos planejados para a plataforma. As trilhas serão ativadas
          progressivamente conforme forem desenvolvidas.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_PATHS.map(({ slug, icon: Icon, title, description, available }) => (
            <Card key={slug} className="flex flex-col gap-3">
              <Icon className="h-8 w-8 text-senac" aria-hidden />
              <h3 className="font-semibold text-slate-100">{title}</h3>
              <p className="text-sm text-slate-400">{description}</p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                {available ? (
                  <Badge tone="cyan">Disponível</Badge>
                ) : (
                  <Badge tone="amber">Em breve</Badge>
                )}
                {available && (
                  <Link
                    to={`/trilhas/${slug}`}
                    className="text-sm font-semibold text-senac hover:text-senac-light"
                  >
                    Começar →
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
