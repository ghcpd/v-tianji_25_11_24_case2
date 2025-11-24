import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <Dashboard />
      </main>
    </div>
  )
}
