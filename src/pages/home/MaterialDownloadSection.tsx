import { FileDown, FileText } from 'lucide-react'

/**
 * Seção de destaque para download do material de apoio da UC (Unidade
 * Curricular) de Aprendizagem. O arquivo fica em /public, então é servido
 * como um asset estático — sem depender de Firebase Storage nem de
 * nenhuma configuração externa.
 */
export function MaterialDownloadSection() {
  return (
    <section
      id="material"
      className="border-y border-senac/20 bg-gradient-to-r from-senac-blue-dark via-slate-950 to-senac-blue-dark py-14"
      aria-labelledby="material-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-senac/15">
          <FileText className="h-8 w-8 text-senac" aria-hidden />
        </div>

        <div className="flex-1">
          <h2
            id="material-title"
            className="text-xl font-bold text-white sm:text-2xl"
          >
            Material de apoio para download
          </h2>
          <p className="mt-2 text-slate-300">
            Baixe o material de referência da Unidade Curricular de
            Aprendizagem utilizado como base para o conteúdo desta
            plataforma. Formato PDF, indicado para alunos e educadores.
          </p>
        </div>

        <a
          href="/UC-3-Aprendizagem.pdf"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-senac px-6 py-3 font-semibold text-white transition hover:bg-senac-light"
        >
          <FileDown className="h-5 w-5" aria-hidden />
          Baixar material (PDF)
        </a>
      </div>
    </section>
  )
}
