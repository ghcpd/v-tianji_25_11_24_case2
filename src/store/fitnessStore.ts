import { create } from 'zustand';

export interface FitnessData {
  currentWeight: number;
  currentSteps: number;
  workoutMinutes: number;
  calories: number;
  weightGoal: number;
  stepsGoal: number;
  workoutGoal: number;
  calorieGoal: number;
  weeklySteps: { day: string; value: number }[];
  weeklyWorkouts: { day: string; value: number }[];
}

interface FitnessStore {
  data: FitnessData;
  updateMetric: (metric: keyof FitnessData, value: number | { day: string; value: number }[]) => void;
  resetData: () => void;
}

const initialData: FitnessData = {
  currentWeight: 75,
  currentSteps: 8432,
  workoutMinutes: 45,
  calories: 1850,
  weightGoal: 72,
  stepsGoal: 10000,
  workoutGoal: 60,
  calorieGoal: 2000,
  weeklySteps: [
    { day: 'Mon', value: 7500 },
    { day: 'Tue', value: 9200 },
    { day: 'Wed', value: 8432 },
    { day: 'Thu', value: 10200 },
    { day: 'Fri', value: 9800 },
    { day: 'Sat', value: 11500 },
    { day: 'Sun', value: 6800 },
  ],
  weeklyWorkouts: [
    { day: 'Mon', value: 30 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 0 },
    { day: 'Fri', value: 50 },
    { day: 'Sat', value: 75 },
    { day: 'Sun', value: 20 },
  ],
};

export const useFitnessStore = create<FitnessStore>((set) => ({
  data: initialData,
  updateMetric: (metric, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [metric]: value,
      },
    })),
  resetData: () =>
    set(() => ({
      data: initialData,
    })),
}));
