import type { DayStats, SummaryMetrics } from '../types'

interface InsightsProps {
  summary: SummaryMetrics
  data: DayStats[]
}

export function Insights({ summary, data }: InsightsProps) {
  const bestStepsDay = data.reduce((best, day) => (day.steps > best.steps ? day : best), data[0])
  const bestSleepDay = data.reduce((best, day) => (day.sleepHours > best.sleepHours ? day : best), data[0])

  const cards = [
    {
      title: 'Goal compliance',
      value: `${summary.complianceRate.toFixed(0)}%`,
      caption: 'Across steps, calories, active minutes, and sleep',
    },
    {
      title: 'Best activity day',
      value: `${bestStepsDay.label} · ${bestStepsDay.steps.toLocaleString()} steps`,
      caption: 'Highest step count',
    },
    {
      title: 'Longest sleep',
      value: `${bestSleepDay.label} · ${bestSleepDay.sleepHours.toFixed(1)} hrs`,
      caption: 'Most rested day',
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <div key={card.title} className="rounded-2xl bg-slate-900/80 p-5 shadow-soft ring-1 ring-slate-800">
          <p className="text-sm font-medium text-slate-400">{card.title}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-100">{card.value}</p>
          <p className="mt-1 text-xs text-slate-500">{card.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default Insights
