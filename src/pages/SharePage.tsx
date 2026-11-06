import { useState } from 'react'
import { Copy, Check, Download, Share2, QrCode } from 'lucide-react'

/**
 * Página de divulgação: exibe o QR Code e o link do site, com botões para
 * copiar o link, compartilhar (Web Share API) e baixar a imagem.
 */
export function SharePage() {
  const [copied, setCopied] = useState(false)
  const siteUrl = window.location.origin
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copie o link:', siteUrl)
    }
  }

  async function handleShare() {
    try {
      await navigator.share({
        title: 'Senac CyberAprendiz',
        text: 'Aprenda segurança cibernética com o Senac CyberAprendiz!',
        url: siteUrl,
      })
    } catch {
      // Usuário cancelou o compartilhamento.
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-4 py-12 text-center sm:px-6">
      <div className="mb-4 flex items-center gap-3">
        <QrCode className="h-8 w-8 text-senac" aria-hidden />
        <h1 className="text-3xl font-bold text-white">Divulgue o CyberAprendiz</h1>
      </div>
      <p className="mb-8 text-slate-300">
        Aponte a câmera do celular para o QR Code ou compartilhe o link abaixo
        para acessar o site.
      </p>

      <div className="rounded-2xl bg-white p-4 shadow-lg">
        <img
          src="/qr-code.png"
          alt="QR Code com o link do site Senac CyberAprendiz"
          className="h-64 w-64 sm:h-80 sm:w-80"
        />
      </div>

      <a
        href={siteUrl}
        className="mt-6 break-all text-lg font-semibold text-senac hover:underline"
      >
        {siteUrl}
      </a>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-lg bg-senac px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-senac-light"
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden />
          ) : (
            <Copy className="h-4 w-4" aria-hidden />
          )}
          {copied ? 'Link copiado!' : 'Copiar link'}
        </button>

        {canShare && (
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-senac hover:text-senac"
          >
            <Share2 className="h-4 w-4" aria-hidden />
            Compartilhar
          </button>
        )}

        <a
          href="/qr-code.png"
          download="qr-code-cyberaprendiz.png"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-senac hover:text-senac"
        >
          <Download className="h-4 w-4" aria-hidden />
          Baixar QR Code
        </a>
      </div>
    </main>
  )
}
