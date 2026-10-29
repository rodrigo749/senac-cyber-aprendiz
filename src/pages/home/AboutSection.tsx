import { CheckCircle2 } from 'lucide-react'

const BENEFITS = [
  'Compreender os principais riscos digitais.',
  'Reconhecer tentativas de phishing e golpes.',
  'Aprender boas práticas de proteção de contas.',
  'Desenvolver hábitos seguros no uso da tecnologia.',
]

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      aria-labelledby="sobre-title"
    >
      <h2 id="sobre-title" className="text-2xl font-bold text-white sm:text-3xl">
        Sobre o projeto
      </h2>
      <p className="mt-4 max-w-3xl text-slate-300">
        O Senac CyberAprendiz busca incentivar a aprendizagem prática de
        segurança cibernética por meio de conteúdos educativos, atividades
        interativas e desafios, ajudando alunos a desenvolverem hábitos mais
        seguros no dia a dia digital.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {BENEFITS.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
              aria-hidden
            />
            <span className="text-slate-200">{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
