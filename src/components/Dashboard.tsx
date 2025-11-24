import React from 'react'
import MetricsCard from './MetricsCard'
import GoalsCard from './GoalsCard'
import WeeklySummary from './WeeklySummary'

const sampleMetrics = [
  { id: '1', title: 'Weight', value: '72 kg', delta: -0.6 },
  { id: '2', title: 'Body Fat', value: '18%', delta: -0.2 },
  { id: '3', title: 'Steps (avg)', value: '8,500', delta: 200 }
]

const sampleGoals = [
  { id: 'g1', title: 'Lose 3 kg', progress: 40 },
  { id: 'g2', title: 'Run 50 km', progress: 62 },
  { id: 'g3', title: 'Strength sessions: 3/week', progress: 75 }
]

const weeklyData = {
  thisWeek: 5,
  lastWeek: 4,
  trainingMinutes: 210,
  caloriesBurned: 2_300
}

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {sampleMetrics.map((m) => (
            <MetricsCard key={m.id} {...m} />
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
          <p className="text-slate-500">This week you trained {weeklyData.thisWeek} days, {weeklyData.trainingMinutes} minutes in total and burned about {weeklyData.caloriesBurned.toLocaleString()} calories.</p>
        </div>
      </div>

      <aside className="space-y-6">
        <GoalsCard goals={sampleGoals} />
        <WeeklySummary data={weeklyData} />
      </aside>
    </div>
  )
}
