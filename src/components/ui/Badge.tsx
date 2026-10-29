import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'cyan' | 'amber' | 'slate'
}

const TONE_CLASSES: Record<NonNullable<BadgeProps['tone']>, string> = {
  cyan: 'bg-senac/15 text-senac-light border-senac/30',
  amber: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  slate: 'bg-slate-700/40 text-slate-300 border-slate-600/50',
}

export function Badge({ children, tone = 'slate' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  )
}
