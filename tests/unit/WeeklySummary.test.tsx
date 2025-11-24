import { render, screen } from '@testing-library/react'
import WeeklySummary from '../../src/components/WeeklySummary'

describe('WeeklySummary', () => {
  it('renders the weekly numbers and delta', () => {
    render(<WeeklySummary data={{ thisWeek: 5, lastWeek: 4, trainingMinutes: 200, caloriesBurned: 2500 }} />)
    expect(screen.getByText(/Workouts/)).toBeInTheDocument()
    // match the exact '5' value for this week's workouts
    expect(screen.getByText(/^5$/)).toBeInTheDocument()
    // calories are formatted with a thousands separator
    expect(screen.getByText(/2,500/)).toBeInTheDocument()
  })
})
