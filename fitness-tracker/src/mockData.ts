import type { WorkoutMetric, Goal, WeeklySummary } from './types';

export const mockMetrics: WorkoutMetric[] = [
  {
    id: '1',
    name: 'Total Workouts',
    value: 24,
    unit: 'sessions',
    icon: '💪',
    change: 12.5,
  },
  {
    id: '2',
    name: 'Calories Burned',
    value: 3450,
    unit: 'kcal',
    icon: '🔥',
    change: 8.3,
  },
  {
    id: '3',
    name: 'Active Minutes',
    value: 720,
    unit: 'min',
    icon: '⏱️',
    change: 15.2,
  },
  {
    id: '4',
    name: 'Distance',
    value: 42.5,
    unit: 'km',
    icon: '🏃',
    change: -3.1,
  },
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Monthly Workout Goal',
    target: 30,
    current: 24,
    unit: 'sessions',
    deadline: '2025-11-30',
  },
  {
    id: '2',
    title: 'Weight Loss Target',
    target: 5,
    current: 3.2,
    unit: 'kg',
    deadline: '2025-12-31',
  },
  {
    id: '3',
    title: '5K Running Goal',
    target: 5,
    current: 3.8,
    unit: 'km',
    deadline: '2025-12-15',
  },
];

export const mockWeeklySummary: WeeklySummary = {
  week: 'Nov 18 - Nov 24',
  totalCalories: 2850,
  totalWorkouts: 6,
  totalDuration: 360,
  activities: [
    { day: 'Mon', calories: 520, duration: 60, completed: true },
    { day: 'Tue', calories: 0, duration: 0, completed: false },
    { day: 'Wed', calories: 480, duration: 55, completed: true },
    { day: 'Thu', calories: 450, duration: 50, completed: true },
    { day: 'Fri', calories: 0, duration: 0, completed: false },
    { day: 'Sat', calories: 700, duration: 90, completed: true },
    { day: 'Sun', calories: 700, duration: 105, completed: true },
  ],
};
