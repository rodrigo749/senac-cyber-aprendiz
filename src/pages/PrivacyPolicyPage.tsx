export function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-white">
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Última atualização: 29 de outubro de 2026.
      </p>

      <div className="mt-8 flex flex-col gap-6 text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            1. Finalidade do cadastro
          </h2>
          <p className="mt-2">
            O e-mail informado no formulário "Quero participar" é coletado
            exclusivamente para enviar comunicações sobre o lançamento e as
            novidades do Senac CyberAprendiz, mediante o seu consentimento
            específico, livre e informado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            2. Dados coletados
          </h2>
          <p className="mt-2">Coletamos apenas:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>E-mail (normalizado, sem espaços e em minúsculas).</li>
            <li>Nome, somente se você optar por informá-lo.</li>
            <li>
              Status, data/hora e versão do texto de consentimento aceito.
            </li>
          </ul>
          <p className="mt-2">
            Não coletamos endereço IP, localização precisa ou outros dados
            desnecessários à finalidade descrita.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            3. Acesso, correção e exclusão
          </h2>
          <p className="mt-2">
            Você pode solicitar acesso, correção ou exclusão dos seus dados,
            bem como revogar o consentimento para comunicações a qualquer
            momento, entrando em contato pelo canal institucional informado
            abaixo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            4. Retenção dos dados
          </h2>
          <p className="mt-2">
            Os dados ficam armazenados enquanto o consentimento estiver
            ativo ou até que seja solicitada a exclusão, o que ocorrer
            primeiro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            5. Contato institucional
          </h2>
          <p className="mt-2">
            <em>
              Canal de contato a ser configurado pela instituição
              responsável pelo projeto (ex.: e-mail institucional do Senac
              responsável por esta iniciativa).
            </em>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            6. Participantes menores de idade
          </h2>
          <p className="mt-2">
            Caso a plataforma venha a ser utilizada por menores de idade, a
            instituição responsável deverá avaliar e implementar os
            procedimentos adicionais exigidos pela Lei Geral de Proteção de
            Dados (LGPD) para o tratamento de dados de crianças e
            adolescentes, incluindo consentimento específico de
            responsáveis legais quando aplicável.
          </p>
        </section>
      </div>
    </main>
  )
}
