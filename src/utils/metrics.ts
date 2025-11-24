import type { DayStats, GoalProgress, GoalTargets, Period, SummaryMetrics } from '../types'

const sum = (arr: number[]) => arr.reduce((acc, n) => acc + n, 0)

export function calculateSummary(data: DayStats[], view: Period, goals: GoalTargets): SummaryMetrics {
  const totalSteps = sum(data.map((d) => d.steps))
  const totalCalories = sum(data.map((d) => d.calories))
  const totalActiveMinutes = sum(data.map((d) => d.activeMinutes))
  const totalSleep = sum(data.map((d) => d.sleepHours))
  const totalWorkouts = sum(data.map((d) => d.workouts))

  const avgSteps = totalSteps / data.length
  const avgActiveMinutes = totalActiveMinutes / data.length
  const avgSleep = totalSleep / data.length

  // Determine per-entry targets (daily for weekly view; weekly for monthly view)
  const divisor = view === 'week' ? 7 : 1
  const stepsPerEntryTarget = goals.steps / divisor
  const activeMinutesPerEntryTarget = goals.activeMinutes / divisor
  const sleepPerEntryTarget = goals.sleepHours / divisor

  const stepGoalHits = data.filter((d) => d.steps >= stepsPerEntryTarget).length
  const caloriesGoalHits = data.filter((d) => d.calories >= goals.calories / divisor).length
  const activeMinutesGoalHits = data.filter((d) => d.activeMinutes >= activeMinutesPerEntryTarget).length
  const sleepGoalHits = data.filter((d) => d.sleepHours >= sleepPerEntryTarget).length

  const complianceRate = ((stepGoalHits + caloriesGoalHits + activeMinutesGoalHits + sleepGoalHits) / (data.length * 4)) * 100

  return {
    totalSteps,
    avgSteps,
    totalCalories,
    avgActiveMinutes,
    avgSleep,
    totalWorkouts,
    stepGoalHits,
    caloriesGoalHits,
    activeMinutesGoalHits,
    sleepGoalHits,
    complianceRate,
  }
}

export function buildGoalProgress(summary: SummaryMetrics, view: Period, goals: GoalTargets, entries: number): GoalProgress[] {
  const scale = view === 'week' ? 1 : entries // monthly data entries represent weeks

  const definitions: Array<Pick<GoalProgress, 'id' | 'label' | 'unit'> & { current: number; target: number }> = [
    { id: 'steps', label: 'Steps', unit: 'steps', current: summary.totalSteps, target: goals.steps * scale },
    { id: 'calories', label: 'Calories', unit: 'kcal', current: summary.totalCalories, target: goals.calories * scale },
    { id: 'activeMinutes', label: 'Active Minutes', unit: 'min', current: summary.avgActiveMinutes * entries, target: goals.activeMinutes * scale },
    { id: 'sleepHours', label: 'Sleep', unit: 'hrs', current: summary.avgSleep * entries, target: goals.sleepHours * scale },
    { id: 'workouts', label: 'Workouts', unit: 'sessions', current: summary.totalWorkouts, target: goals.workouts * scale },
  ]

  return definitions.map(({ id, label, unit, current, target }) => ({
    id,
    label,
    unit,
    current,
    target,
    progress: target === 0 ? 0 : Math.min(1, current / target),
  }))
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k`
  return value.toLocaleString()
}

export function formatUnit(value: number, unit: string): string {
  return `${value.toLocaleString(undefined, { maximumFractionDigits: value % 1 === 0 ? 0 : 1 })} ${unit}`.trim()
}
