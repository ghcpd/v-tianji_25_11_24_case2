import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
            FT
          </div>
          <div>
            <h1 className="text-xl font-semibold">Fitness Progress Tracker</h1>
            <p className="text-sm text-slate-500">Track metrics, goals, and weekly summaries</p>
          </div>
        </div>
        <div>
          <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200">Export</button>
        </div>
      </div>
    </header>
  )
}
