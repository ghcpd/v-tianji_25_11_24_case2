import React from 'react'

function assessProgress(metrics, goals) {
  const weight = metrics.find((m) => m.name === 'Weight')?.value || 0
  const pctToGoal = Math.round(((weight - goals.weight) / (goals.weight || 1)) * 100)
  return { weight, pctToGoal }
}

export default function WeeklySummary({ metrics, goals }) {
  const { weight, pctToGoal } = assessProgress(metrics, goals)

  return (
    <div className="summary">
      <div className="summary-row">
        <div>Weight</div>
        <div className="bold">{weight} kg</div>
      </div>
      <div className="summary-row soft">
        <div>Progress to goal</div>
        <div>{pctToGoal}%</div>
      </div>
    </div>
  )
}
