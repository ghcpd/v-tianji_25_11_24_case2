import React, { useState } from 'react'
import MetricCard from './components/MetricCard'
import GoalForm from './components/GoalForm'
import WeeklySummary from './components/WeeklySummary'

const initialMetrics = [
  { id: 1, name: 'Weight', value: 78, unit: 'kg' },
  { id: 2, name: 'Body Fat', value: 18.2, unit: '%' },
  { id: 3, name: 'Running Distance', value: 12, unit: 'km' }
]

export default function App() {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [goals, setGoals] = useState({ weight: 75, bodyFat: 15 })

  function updateGoal(newGoals) {
    setGoals((prev) => ({ ...prev, ...newGoals }))
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <h1>Fitness Progress Tracker</h1>
          <p className="subtitle">Track metrics, set goals, and reflect weekly progress.</p>
        </div>
      </header>

      <main className="container grid">
        <section className="metrics">
          <h2>Metrics</h2>
          <div className="cards">
            {metrics.map((m) => (
              <MetricCard key={m.id} metric={m} />
            ))}
          </div>
        </section>

        <aside className="panel">
          <h2>Goals</h2>
          <GoalForm goals={goals} onSave={updateGoal} />

          <h2 className="mt">Weekly Summary</h2>
          <WeeklySummary metrics={metrics} goals={goals} />
        </aside>
      </main>
      <footer className="footer">Made with care · React + Vite</footer>
    </div>
  )
}
