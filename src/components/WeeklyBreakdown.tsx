import type { DayStats } from '../types'
import { formatNumber } from '../utils/metrics'

interface WeeklyBreakdownProps {
  data: DayStats[]
}

export function WeeklyBreakdown({ data }: WeeklyBreakdownProps) {
  return (
    <div className="rounded-2xl bg-slate-900/80 p-5 shadow-soft ring-1 ring-slate-800" data-testid="weekly-breakdown">
      <h3 className="text-lg font-semibold text-slate-100">Daily Breakdown</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-3 py-2">Day</th>
              <th className="px-3 py-2">Steps</th>
              <th className="px-3 py-2">Calories</th>
              <th className="px-3 py-2">Active</th>
              <th className="px-3 py-2">Sleep</th>
              <th className="px-3 py-2">Workouts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.label} className="border-b border-slate-800/70 last:border-none hover:bg-slate-800/40">
                <td className="px-3 py-2 font-medium text-slate-100">{row.label}</td>
                <td className="px-3 py-2">{formatNumber(row.steps)}</td>
                <td className="px-3 py-2">{row.calories.toLocaleString()} kcal</td>
                <td className="px-3 py-2">{row.activeMinutes} min</td>
                <td className="px-3 py-2">{row.sleepHours.toFixed(1)} h</td>
                <td className="px-3 py-2">{row.workouts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WeeklyBreakdown
