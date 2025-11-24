import React from 'react'

export default function MetricCard({ metric }) {
  const { name, value, unit } = metric
  return (
    <div className="metric-card">
      <div className="metric-header">
        <h3>{name}</h3>
      </div>
      <div className="metric-value">{value} <span className="unit">{unit}</span></div>
    </div>
  )
}
