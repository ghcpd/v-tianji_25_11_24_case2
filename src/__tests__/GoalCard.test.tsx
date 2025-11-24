import { render, screen, fireEvent } from '@testing-library/react'
import GoalCard from '../components/GoalCard'

describe('GoalCard', () => {
  it('shows default goal and updates', async () => {
    let called = 0
    const onGoalChange = (g: number) => {
      called = g
    }

    render(<GoalCard defaultGoal={100} onGoalChange={onGoalChange} />)

    const input = screen.getByLabelText(/goal-input/i) as HTMLInputElement
    expect(input.value).toBe('100')

    fireEvent.change(input, { target: { value: '130' } })
    expect(input.value).toBe('130')
    // the handler should have been called with numeric value
    expect(called).toBe(130)
  })
})
