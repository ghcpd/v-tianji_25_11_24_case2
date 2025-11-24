import React, { useState } from 'react'

export default function GoalCard({ defaultGoal, onGoalChange }: { defaultGoal: number; onGoalChange?: (n: number) => void }) {
  const [goal, setGoal] = useState(defaultGoal)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value || 0)
    setGoal(next)
    onGoalChange?.(next)
  }

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/40 card-shadow border border-white/6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-300/60">Weekly Goal</div>
          <div className="mt-1 text-2xl font-semibold">{goal} <span className="text-sm text-slate-400">min</span></div>
        </div>

        <div className="flex items-center gap-2">
          <input aria-label="goal-input" value={goal} onChange={handleChange} type="number" className="w-20 bg-transparent border border-white/6 rounded-lg px-3 py-1 text-right" />
          <button className="bg-primary px-3 py-2 rounded-lg text-white font-semibold shadow-md hover:opacity-95">Save</button>
        </div>
      </div>

      <p className="text-xs text-slate-300/60 mt-3">Keep a weekly target to stay consistent — the tracker will help you compare recent weeks below.</p>
    </div>
  )
}
