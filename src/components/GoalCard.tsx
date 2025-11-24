import type { ReactNode } from 'react'
import { cn } from '../utils/styles'

interface GoalCardProps {
  title: string
  progress: number // 0-1
  targetLabel: string
  currentLabel: string
  icon?: ReactNode
}

export function GoalCard({ title, progress, targetLabel, currentLabel, icon }: GoalCardProps) {
  const clamped = Math.max(0, Math.min(1, progress))

  return (
    <div className="group rounded-2xl bg-slate-900/75 p-5 shadow-soft ring-1 ring-slate-800/80 backdrop-blur transition hover:-translate-y-0.5 hover:ring-primary/60">
      <div className="flex items-center gap-3">
        {icon && <div className="rounded-full bg-primary/10 p-2 text-primary group-hover:bg-primary/20">{icon}</div>}
        <div>
          <p className="text-sm font-medium text-slate-400">Goal</p>
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{currentLabel}</span>
          <span>{targetLabel}</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-800">
          <div
            className={cn(
              'h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500',
            )}
            style={{ width: `${clamped * 100}%` }}
            aria-label={`${title} progress`}
          />
        </div>
      </div>
    </div>
  )
}

export default GoalCard
