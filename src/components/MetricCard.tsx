import React from 'react'
import type { Metric } from '../data/sampleData'

export default function MetricCard({ metric }: { metric: Metric }) {
  const up = metric.change && metric.change > 0
  const changeText = metric.change === undefined ? null : `${metric.change > 0 ? '+' : ''}${metric.change}`

  return (
    <div className="p-4 bg-gradient-to-tr from-slate-900/70 via-slate-900/60 to-slate-800/50 rounded-2xl card-shadow border border-white/6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-300/60">{metric.title}</div>
          <div className="mt-1 text-2xl font-semibold flex items-baseline gap-2">
            <span>{metric.value}</span>
            {metric.unit && <span className="text-sm text-slate-400/80">{metric.unit}</span>}
          </div>
        </div>

        {metric.change !== undefined && (
          <div className={`text-sm px-2 py-1 rounded-full font-medium ${up ? 'bg-green-800/60 text-green-300' : 'bg-red-900/60 text-rose-200'}`}>
            {changeText}
          </div>
        )}
      </div>
    </div>
  )
}
