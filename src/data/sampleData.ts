export type Metric = {
  id: string
  title: string
  value: number
  unit?: string
  change?: number
}

export type WeeklyStat = {
  weekLabel: string
  workouts: number
  calories: number
  minutes: number
}

export const DEFAULT_GOAL = 120 // minutes of exercise per week

export const sampleMetrics: Metric[] = [
  { id: 'm1', title: 'This week', value: 92, unit: 'min', change: -8 },
  { id: 'm2', title: 'Calories', value: 1860, unit: 'kcal', change: +210 },
  { id: 'm3', title: 'Workouts', value: 4, change: 0 }
]

export const sampleWeekly: WeeklyStat[] = [
  { weekLabel: 'Week -3', workouts: 3, calories: 1700, minutes: 75 },
  { weekLabel: 'Week -2', workouts: 4, calories: 2200, minutes: 120 },
  { weekLabel: 'Week -1', workouts: 4, calories: 1860, minutes: 92 },
  { weekLabel: 'This week', workouts: 5, calories: 2000, minutes: 142 }
]
