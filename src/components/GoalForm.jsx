import React, { useState } from 'react'

export default function GoalForm({ goals, onSave }) {
  const [local, setLocal] = useState(goals)

  function handleChange(e) {
    const { name, value } = e.target
    setLocal((prev) => ({ ...prev, [name]: Number(value) }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSave(local)
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <label>
        Weight Goal (kg)
        <input name="weight" value={local.weight} onChange={handleChange} type="number" />
      </label>

      <label>
        Body Fat Goal (%)
        <input name="bodyFat" value={local.bodyFat} onChange={handleChange} type="number" />
      </label>

      <button type="submit">Save Goals</button>
    </form>
  )
}
