import React from 'react';
import { Card } from './Card';
import { WeeklyChart } from './WeeklyChart';
import { useFitnessStore } from '../store/fitnessStore';

export const WeeklySection: React.FC = () => {
  const data = useFitnessStore((state) => state.data);

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Weekly Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <WeeklyChart
            data={data.weeklySteps.map((d) => ({
              ...d,
              maxValue: 12000,
            }))}
            label="Steps"
            unit="steps"
          />
        </Card>
        <Card>
          <WeeklyChart
            data={data.weeklyWorkouts.map((d) => ({
              ...d,
              maxValue: 100,
            }))}
            label="Workout Duration"
            unit="min"
          />
        </Card>
      </div>
    </section>
  );
};
