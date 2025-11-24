import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import MetricCard from './components/MetricCard'
import GoalCard from './components/GoalCard'
import WeeklySummary from './components/WeeklySummary'
import { sampleMetrics, sampleWeekly, DEFAULT_GOAL } from './data/sampleData'

function App() {
  const [goal, setGoal] = useState(DEFAULT_GOAL)

  const percent = useMemo(() => Math.min(100, Math.round((sampleMetrics[0].value / goal) * 100)), [goal])

  return (
    <div className="app-shell w-full min-h-screen flex items-start">
      <div className="container max-w-6xl w-full">
        <Header />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <section className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 card-shadow border border-white/6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">Your weekly focus</h2>
                  <p className="text-sm text-slate-300/70 mt-1">You&apos;re making steady progress. Keep up the great work!</p>

                  <div className="mt-6 flex items-center gap-6">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-tl from-primary/50 to-indigo-700/50 p-3 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-slate-900/30 to-slate-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{sampleMetrics[0].value}</div>
                          <div className="text-xs text-slate-300/70">min</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-300/60">Progress toward goal</div>
                          <div className="text-sm font-semibold mt-1">{percent}% of {goal} min</div>
                        </div>
                        <div className="text-sm text-slate-400">4 days streak</div>
                      </div>

                      <div className="mt-4 bg-white/5 rounded-full h-3 relative overflow-hidden">
                        <div data-testid="progress-bar" className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-indigo-500" style={{ width: `${percent}%` }} />
                      </div>

                      <div className="mt-4 text-sm text-slate-300/70">Continue adding short workouts to close the gap — micro-habits win.</div>
                    </div>
                  </div>
                </div>

                <div className="w-40 hidden lg:block">
                  <div className="text-xs text-slate-300/60">Quick stats</div>
                  <div className="mt-3 space-y-3">
                    {sampleMetrics.map((m) => (
                      <MetricCard key={m.id} metric={m} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <WeeklySummary weeks={sampleWeekly} />
          </section>

          <aside className="space-y-6">
            <GoalCard defaultGoal={goal} onGoalChange={(n) => setGoal(n)} />

            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/40 card-shadow border border-white/6">
              <div className="text-sm text-slate-300/60">Tips</div>
              <ul className="mt-3 text-sm text-slate-300/70 space-y-2">
                <li>Schedule 2 short cardio sessions and a mobility session this week.</li>
                <li>Short, consistent workouts beat long sporadic ones.</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default App
