import React from 'react'
import type { WeeklyStat } from '../data/sampleData'

export default function WeeklySummary({ weeks }: { weeks: WeeklyStat[] }) {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-tr from-slate-900/60 to-slate-800/40 card-shadow border border-white/6 w-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm text-slate-300/60">Weekly Summary</div>
          <div className="text-sm text-slate-200">Recent weeks at a glance</div>
        </div>
        <div className="text-xs text-slate-300/50">4 weeks</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {weeks.map((w) => (
          <div key={w.weekLabel} className="p-3 rounded-lg bg-slate-900/40 border border-white/4">
            <div className="text-xs text-slate-300/60">{w.weekLabel}</div>
            <div className="text-sm text-slate-200 font-semibold mt-1">{w.workouts} workouts • {w.minutes} min</div>
            <div className="mt-2 text-xs text-slate-300/60">{w.calories} kcal</div>
          </div>
        ))}
      </div>
    </div>
  )
}
