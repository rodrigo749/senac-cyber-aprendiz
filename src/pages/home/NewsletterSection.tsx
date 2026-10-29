import { NewsletterForm } from '../../features/newsletter/NewsletterForm'

export function NewsletterSection() {
  return (
    <section
      id="cadastro"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      aria-labelledby="cadastro-title"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2
          id="cadastro-title"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Faça parte do CyberAprendiz
        </h2>
        <p className="mt-3 text-slate-300">
          Cadastre seu e-mail para acompanhar o lançamento da plataforma e
          receber novidades sobre aprendizagem e segurança cibernética.
        </p>
      </div>

      <NewsletterForm />
    </section>
  )
}
