import { type ReactNode, useMemo } from 'react'
import { cn } from '../utils/styles'
import { formatNumber } from '../utils/metrics'

interface MetricCardProps {
  title: string
  value: number
  unit?: string
  change?: number // percentage change
  trend?: number[]
  icon?: ReactNode
  accentClassName?: string
}

export function MetricCard({ title, value, unit = '', change, trend, icon, accentClassName }: MetricCardProps) {
  const { points, viewBox, max } = useMemo(() => getSparklinePoints(trend), [trend])

  return (
    <div className="rounded-2xl bg-slate-900/80 p-5 shadow-soft ring-1 ring-slate-800 backdrop-blur">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-slate-50">{formatNumber(value)}</span>
            {unit && <span className="text-sm text-slate-400">{unit}</span>}
          </div>
        </div>
        {icon && (
          <div className={cn('rounded-full p-2 text-primary', accentClassName)}>
            {icon}
          </div>
        )}
      </div>
      {typeof change === 'number' && (
        <div
          className={cn(
            'mt-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
            change >= 0 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400',
          )}
        >
          <span>{change >= 0 ? '▲' : '▼'}</span>
          <span>{Math.abs(change).toFixed(1)}%</span>
          <span className="text-slate-500">vs last {trend && trend.length > 7 ? 'month' : 'week'}</span>
        </div>
      )}

      {points && (
        <div className="mt-4 h-20">
          <svg viewBox={viewBox} className="h-full w-full text-primary/70" preserveAspectRatio="none">
            <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} vectorEffect="non-scaling-stroke" />
            {/* gradient area */}
            <defs>
              <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              fill="url(#sparklineGradient)"
              points={`${points} ${points.split(' ').at(-1)?.split(',')[0]},${max} ${points.split(' ')[0]?.split(',')[0]},${max}`}
            />
          </svg>
        </div>
      )}
    </div>
  )
}

function getSparklinePoints(trend?: number[]) {
  if (!trend || trend.length === 0) return { points: null, viewBox: '0 0 100 40', min: 0, max: 40 }
  const min = Math.min(...trend)
  const max = Math.max(...trend)
  const range = max - min || 1

  const points = trend
    .map((value, index) => {
      const x = (index / (trend.length - 1)) * 100
      const y = 40 - ((value - min) / range) * 40
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')

  return { points, viewBox: '0 0 100 40', min: 0, max: 40 }
}

export default MetricCard
