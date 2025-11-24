import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 w-full max-w-6xl mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          FP
        </div>
        <div>
          <h1 className="text-2xl font-semibold leading-tight">Fitness Progress</h1>
          <p className="text-sm text-slate-300/80">Track metrics, set goals, and monitor weekly progress</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <nav className="flex gap-3 text-sm text-slate-300/80">
          <a className="px-3 py-1 rounded-md hover:bg-slate-700/30">Overview</a>
          <a className="px-3 py-1 rounded-md hover:bg-slate-700/30">Workouts</a>
          <a className="px-3 py-1 rounded-md hover:bg-slate-700/30">Profile</a>
        </nav>

        <div className="px-3 py-1 bg-slate-800 rounded-md text-sm text-slate-200">Signed in</div>
      </div>
    </header>
  )
}
