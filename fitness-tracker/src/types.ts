export interface WorkoutMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  icon: string;
  change: number; // percentage change
}

export interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
}

export interface WeeklyActivity {
  day: string;
  calories: number;
  duration: number; // minutes
  completed: boolean;
}

export interface WeeklySummary {
  week: string;
  totalCalories: number;
  totalWorkouts: number;
  totalDuration: number;
  activities: WeeklyActivity[];
}
