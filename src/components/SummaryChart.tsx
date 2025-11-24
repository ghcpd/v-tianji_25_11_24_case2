import type { DayStats, Period } from '../types'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts'

interface SummaryChartProps {
  data: DayStats[]
  view: Period
}

const tooltipFormatter = (value: number, name: string) => {
  switch (name) {
    case 'Steps':
      return [value.toLocaleString(), name]
    case 'Calories':
      return [`${value.toLocaleString()} kcal`, name]
    case 'Active Minutes':
      return [`${value} min`, name]
    default:
      return [value, name]
  }
}

export function SummaryChart({ data, view }: SummaryChartProps) {
  return (
    <div className="rounded-2xl bg-slate-900/80 p-5 shadow-soft ring-1 ring-slate-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">{view === 'week' ? 'Weekly Overview' : 'Monthly Overview'}</h3>
        <span className="text-xs text-slate-400">Interactive chart</span>
      </div>
      <div className="h-72" data-testid="summary-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2933" />
            <XAxis dataKey="label" stroke="#64748b" tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 12, border: '1px solid #1e293b' }} formatter={tooltipFormatter} />
            <Legend wrapperStyle={{ color: '#cbd5f5' }} />
            <Line type="monotone" dataKey="steps" name="Steps" stroke="#6366f1" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="calories" name="Calories" stroke="#fb7185" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="activeMinutes" name="Active Minutes" stroke="#22d3ee" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SummaryChart
