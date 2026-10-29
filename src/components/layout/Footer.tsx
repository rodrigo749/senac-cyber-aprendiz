import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} Senac CyberAprendiz. Projeto
          educacional em desenvolvimento.
        </p>
        <nav className="flex gap-4" aria-label="Links institucionais">
          <Link to="/privacidade" className="hover:text-senac">
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  )
}
