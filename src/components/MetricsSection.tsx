import React from 'react';
import { Card } from './Card';
import { MetricCard } from './MetricCard';
import { useFitnessStore } from '../store/fitnessStore';

export const MetricsSection: React.FC = () => {
  const data = useFitnessStore((state) => state.data);

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Current Weight"
          value={data.currentWeight}
          unit="kg"
          icon="⚖️"
          color="blue"
        />
        <MetricCard
          label="Steps Today"
          value={data.currentSteps}
          unit="steps"
          icon="👟"
          color="green"
        />
        <MetricCard
          label="Workout Time"
          value={data.workoutMinutes}
          unit="min"
          icon="🏋️"
          color="orange"
        />
        <MetricCard
          label="Calories"
          value={data.calories}
          unit="kcal"
          icon="🔥"
          color="purple"
        />
      </div>
    </section>
  );
};
