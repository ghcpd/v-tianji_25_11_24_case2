import { render, screen } from '@testing-library/react'
import GoalsCard from '../../src/components/GoalsCard'

describe('GoalsCard', () => {
  it('renders list of goals and progress bars', () => {
    const goals = [{ id: 'g1', title: 'Lose 3 kg', progress: 40 }]
    render(<GoalsCard goals={goals} />)
    expect(screen.getByText(/Lose 3 kg/i)).toBeInTheDocument()
    expect(screen.getByText(/40%/)).toBeInTheDocument()
  })
})
