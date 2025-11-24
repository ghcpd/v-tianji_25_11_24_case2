import React from 'react'

type Props = {
  id: string
  title: string
  value: string
  delta: number
}

export default function MetricsCard({ title, value, delta }: Props) {
  const isPositive = delta > 0
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-600">{title}</h3>
          <div className="text-xl font-bold mt-1">{value}</div>
        </div>
        <div className={`px-3 py-1 rounded-md text-sm font-semibold ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
          {isPositive ? '+' : ''}{delta}
        </div>
      </div>
    </div>
  )
}
