export type Period = 'week' | 'month'

export interface DayStats {
  label: string
  date: string
  steps: number
  calories: number
  activeMinutes: number
  sleepHours: number
  workouts: number
}

export interface GoalTargets {
  steps: number
  calories: number
  activeMinutes: number
  sleepHours: number
  workouts: number
}

export interface SummaryMetrics {
  totalSteps: number
  avgSteps: number
  totalCalories: number
  avgActiveMinutes: number
  avgSleep: number
  totalWorkouts: number
  stepGoalHits: number
  caloriesGoalHits: number
  activeMinutesGoalHits: number
  sleepGoalHits: number
  complianceRate: number
}

export interface GoalProgress {
  id: keyof GoalTargets
  label: string
  target: number
  current: number
  progress: number
  unit: string
}
