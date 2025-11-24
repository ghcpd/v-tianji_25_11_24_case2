import React from 'react'

export type Goal = {
  id: string
  title: string
  progress: number // 0-100
}

export default function GoalsCard({ goals }: { goals: Goal[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Goals</h2>
      <ul className="space-y-4">
        {goals.map((g) => (
          <li key={g.id} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="text-slate-700 font-medium">{g.title}</div>
              <div className="text-sm text-slate-500">{g.progress}%</div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" style={{ width: `${g.progress}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
