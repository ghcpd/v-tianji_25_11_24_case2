import { useMemo, useState } from 'react'
import { Activity, Flame, Moon, SunMedium, Target, Timer } from 'lucide-react'
import { SummaryChart } from './components/SummaryChart'
import { MetricCard } from './components/MetricCard'
import { GoalCard } from './components/GoalCard'
import { WeeklyBreakdown } from './components/WeeklyBreakdown'
import { Insights } from './components/Insights'
import { weeklyData, monthlyData, weeklyGoals, previousMonthlyData } from './data/mockData'
import { buildGoalProgress, calculateSummary } from './utils/metrics'
import type { Period } from './types'

const viewOptions: Array<{ id: Period; label: string }> = [
  { id: 'week', label: 'Weekly' },
  { id: 'month', label: 'Monthly' },
]

function App() {
  const [view, setView] = useState<Period>('week')

  const activeData = view === 'week' ? weeklyData : monthlyData
  const baselineData = view === 'week' ? monthlyData : previousMonthlyData

  const summary = useMemo(() => calculateSummary(activeData, view, weeklyGoals), [activeData, view])
  const baselineSummary = useMemo(() => calculateSummary(baselineData, view === 'week' ? 'month' : 'month', weeklyGoals), [baselineData, view])
  const goalProgress = useMemo(() => buildGoalProgress(summary, view, weeklyGoals, activeData.length), [summary, view, activeData.length])

  const compareChange = (metric: 'steps' | 'calories' | 'activeMinutes' | 'sleep'): number | undefined => {
    if (!baselineSummary) return undefined
    const current = getMetricValue(summary, metric)
    const baseline = getMetricValue(baselineSummary, metric)
    if (!baseline) return undefined
    return ((current - baseline) / baseline) * 100
  }

  const metrics = [
    {
      title: 'Total Steps',
      value: summary.totalSteps,
      unit: '',
      change: compareChange('steps'),
      trend: activeData.map((d) => d.steps),
      icon: <Activity className="h-5 w-5" />,
    },
    {
      title: 'Calories Burned',
      value: summary.totalCalories,
      unit: 'kcal',
      change: compareChange('calories'),
      trend: activeData.map((d) => d.calories),
      icon: <Flame className="h-5 w-5" />,
    },
    {
      title: view === 'week' ? 'Avg Active Minutes' : 'Active Minutes',
      value: view === 'week' ? Number(summary.avgActiveMinutes.toFixed(1)) : summary.avgActiveMinutes * activeData.length,
      unit: view === 'week' ? 'min/day' : 'min',
      change: compareChange('activeMinutes'),
      trend: activeData.map((d) => d.activeMinutes),
      icon: <Timer className="h-5 w-5" />,
    },
    {
      title: view === 'week' ? 'Avg Sleep' : 'Sleep Duration',
      value: Number(summary.avgSleep.toFixed(1)),
      unit: view === 'week' ? 'hrs/night' : 'hrs',
      change: compareChange('sleep'),
      trend: activeData.map((d) => d.sleepHours),
      icon: view === 'week' ? <Moon className="h-5 w-5" /> : <SunMedium className="h-5 w-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Fitness Progress Tracker</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-50">Your performance at a glance</h1>
            <p className="mt-1 text-sm text-slate-400">See your key metrics, goal progress, and weekly insights in one place.</p>
          </div>
          <div className="inline-flex self-start rounded-full bg-slate-900/70 p-1 ring-1 ring-slate-800">
            {viewOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setView(option.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  view === option.id ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                }`}
                data-testid={`toggle-${option.id}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Key metrics">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3" aria-label="Charts and insights">
          <div className="lg:col-span-2">
            <SummaryChart data={activeData} view={view} />
          </div>
          <div className="flex h-full flex-col gap-4">
            <Insights summary={summary} data={activeData} />
          </div>
        </section>

        <section aria-label="Goals" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {goalProgress.map((goal) => (
            <GoalCard
              key={goal.id}
              title={goal.label}
              progress={goal.progress}
              currentLabel={`${goal.current.toLocaleString(undefined, { maximumFractionDigits: goal.id === 'sleepHours' ? 1 : 0 })} ${goal.unit}`}
              targetLabel={`${goal.target.toLocaleString(undefined, { maximumFractionDigits: goal.id === 'sleepHours' ? 1 : 0 })} ${goal.unit}`}
              icon={<Target className="h-5 w-5" />}
            />
          ))}
        </section>

        <section>
          <WeeklyBreakdown data={activeData} />
        </section>
      </div>
    </div>
  )
}

function getMetricValue(summary: ReturnType<typeof calculateSummary>, metric: 'steps' | 'calories' | 'activeMinutes' | 'sleep') {
  switch (metric) {
    case 'steps':
      return summary.totalSteps
    case 'calories':
      return summary.totalCalories
    case 'activeMinutes':
      return summary.avgActiveMinutes
    case 'sleep':
      return summary.avgSleep
  }
}

export default App
