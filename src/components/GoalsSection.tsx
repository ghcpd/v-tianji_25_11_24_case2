import React from 'react';
import { Card } from './Card';
import { GoalProgress } from './GoalProgress';
import { useFitnessStore } from '../store/fitnessStore';

export const GoalsSection: React.FC = () => {
  const data = useFitnessStore((state) => state.data);

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Weekly Goals</h2>
      <Card>
        <GoalProgress
          name="Weight Loss Goal"
          current={data.currentWeight}
          target={data.weightGoal}
          unit="kg"
          color="blue"
        />
        <GoalProgress
          name="Daily Steps Goal"
          current={data.currentSteps}
          target={data.stepsGoal}
          unit="steps"
          color="green"
        />
        <GoalProgress
          name="Workout Duration Goal"
          current={data.workoutMinutes}
          target={data.workoutGoal}
          unit="min"
          color="orange"
        />
        <GoalProgress
          name="Calorie Intake Goal"
          current={data.calories}
          target={data.calorieGoal}
          unit="kcal"
          color="purple"
        />
      </Card>
    </section>
  );
};
