import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Menu, X, Lock } from 'lucide-react'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre o projeto' },
  { href: '#material', label: 'Material' },
  { href: '#trilhas', label: 'Trilhas' },
  { href: '#desafios', label: 'Desafios' },
  { href: '#gamificacao', label: 'Gamificação' },
  { href: '#cadastro', label: 'Cadastro' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-slate-100"
        >
          <ShieldCheck className="h-6 w-6 text-senac" aria-hidden />
          <span>
            Senac <span className="text-senac">CyberAprendiz</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-senac"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cadastro"
            className="rounded-lg bg-senac px-4 py-2 text-sm font-semibold text-white transition hover:bg-senac-light"
          >
            Quero participar
          </a>
          <Link
            to="/admin/login"
            aria-label="Área administrativa"
            title="Área administrativa"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 transition hover:text-senac"
          >
            <Lock className="h-4 w-4" aria-hidden />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação principal (celular)"
          className="flex flex-col gap-1 border-t border-slate-800 bg-slate-950 px-4 py-3 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-senac"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cadastro"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-lg bg-senac px-3 py-2 text-center text-sm font-semibold text-white"
          >
            Quero participar
          </a>
          <Link
            to="/admin/login"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 inline-flex items-center gap-2 px-3 py-2 text-xs text-slate-500 hover:text-senac"
          >
            <Lock className="h-3.5 w-3.5" aria-hidden />
            Área administrativa
          </Link>
        </nav>
      )}
    </header>
  )
}
