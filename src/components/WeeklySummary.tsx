import React from 'react'

export default function WeeklySummary({ data }: { data: { thisWeek: number; lastWeek: number; trainingMinutes: number; caloriesBurned: number } }) {
  const delta = data.thisWeek - data.lastWeek
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Weekly Summary</h2>
      <div className="flex items-center justify-between mb-2">
        <div className="text-slate-500">Workouts (this week)</div>
        <div className="font-semibold text-lg">{data.thisWeek}</div>
      </div>
      <div className="flex items-center justify-between mb-2 text-sm text-slate-500">
        <div>Last week</div>
        <div>{data.lastWeek}</div>
      </div>
      <div className="flex items-center justify-between border-t pt-3 mt-3">
        <div className="text-sm text-slate-500">Total time</div>
        <div className="font-semibold">{data.trainingMinutes} mins</div>
      </div>
      <div className="flex items-center justify-between mt-2 text-sm text-slate-500">
        <div>Calories</div>
        <div className="font-semibold">{data.caloriesBurned.toLocaleString()}</div>
      </div>
      <div className="mt-4 text-sm text-slate-600">
        Change vs last week: <span className={`font-medium ${delta >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{delta >= 0 ? '+' : ''}{delta}</span>
      </div>
    </div>
  )
}
