import { render, screen } from '@testing-library/react'
import WeeklySummary from '../components/WeeklySummary'

const weeks = [
  { weekLabel: 'W1', workouts: 2, calories: 1200, minutes: 60 },
  { weekLabel: 'W2', workouts: 3, calories: 1600, minutes: 90 }
]

describe('WeeklySummary', () => {
  it('renders weekly tiles', () => {
    render(<WeeklySummary weeks={weeks} />)

    expect(screen.getByText('Weekly Summary')).toBeInTheDocument()
    expect(screen.getByText('W1')).toBeInTheDocument()
    expect(screen.getByText('W2')).toBeInTheDocument()
    expect(screen.getByText('2 workouts • 60 min')).toBeInTheDocument()
  })
})
