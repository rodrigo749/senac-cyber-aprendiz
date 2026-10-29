import { ShieldCheck, Lock, Radar } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-[#0b2a43] to-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-senac/30 bg-senac/10 px-3 py-1 text-xs font-medium text-senac-light">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Senac
            CyberAprendiz
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Aprenda a se proteger no mundo digital.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Desenvolva conhecimentos para reconhecer ameaças digitais,
            proteger seus dados e navegar com mais segurança.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="rounded-lg bg-senac px-6 py-3 text-center font-semibold text-white transition hover:bg-senac-light"
            >
              Quero participar
            </a>
            <a
              href="#sobre"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-senac hover:text-senac-light"
            >
              Conhecer o projeto
            </a>
          </div>
        </div>

        <div
          className="relative hidden items-center justify-center md:flex"
          aria-hidden="true"
        >
          <div className="relative h-72 w-72 rounded-full border border-senac/20">
            <div className="absolute inset-6 rounded-full border border-senac/30" />
            <div className="absolute inset-12 rounded-full border border-senac/40" />
            <ShieldCheck className="absolute inset-0 m-auto h-20 w-20 text-senac" />
            <Lock className="absolute left-2 top-6 h-8 w-8 text-emerald-400" />
            <Radar className="absolute bottom-4 right-0 h-8 w-8 text-senac-light" />
          </div>
        </div>
      </div>
    </section>
  )
}
