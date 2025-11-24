import type { DayStats, GoalTargets } from '../types'

export const weeklyData: DayStats[] = [
  { label: 'Mon', date: '2025-11-17', steps: 11234, calories: 2150, activeMinutes: 65, sleepHours: 7.2, workouts: 1 },
  { label: 'Tue', date: '2025-11-18', steps: 9876, calories: 1980, activeMinutes: 50, sleepHours: 6.8, workouts: 0 },
  { label: 'Wed', date: '2025-11-19', steps: 13450, calories: 2300, activeMinutes: 70, sleepHours: 7.5, workouts: 1 },
  { label: 'Thu', date: '2025-11-20', steps: 12010, calories: 2050, activeMinutes: 55, sleepHours: 7.1, workouts: 1 },
  { label: 'Fri', date: '2025-11-21', steps: 14120, calories: 2400, activeMinutes: 75, sleepHours: 6.9, workouts: 1 },
  { label: 'Sat', date: '2025-11-22', steps: 16234, calories: 2600, activeMinutes: 90, sleepHours: 8.1, workouts: 1 },
  { label: 'Sun', date: '2025-11-23', steps: 10220, calories: 1900, activeMinutes: 45, sleepHours: 7.8, workouts: 0 },
]

export const monthlyData: DayStats[] = [
  { label: 'Week 1', date: '2025-11-02', steps: 71500, calories: 14800, activeMinutes: 420, sleepHours: 56, workouts: 5 },
  { label: 'Week 2', date: '2025-11-09', steps: 68900, calories: 14500, activeMinutes: 405, sleepHours: 54, workouts: 4 },
  { label: 'Week 3', date: '2025-11-16', steps: 73200, calories: 15200, activeMinutes: 440, sleepHours: 55, workouts: 6 },
  { label: 'Week 4', date: '2025-11-23', steps: 70150, calories: 14950, activeMinutes: 415, sleepHours: 53, workouts: 5 },
]

export const weeklyGoals: GoalTargets = {
  steps: 70000,
  calories: 14000,
  activeMinutes: 420,
  sleepHours: 56,
  workouts: 5,
}

export const previousMonthlyData: DayStats[] = [
  { label: 'Week 1', date: '2025-10-05', steps: 68200, calories: 14150, activeMinutes: 395, sleepHours: 52, workouts: 4 },
  { label: 'Week 2', date: '2025-10-12', steps: 67450, calories: 13900, activeMinutes: 388, sleepHours: 51, workouts: 4 },
  { label: 'Week 3', date: '2025-10-19', steps: 69100, calories: 14220, activeMinutes: 402, sleepHours: 53, workouts: 5 },
  { label: 'Week 4', date: '2025-10-26', steps: 66500, calories: 13850, activeMinutes: 380, sleepHours: 50, workouts: 4 },
]
