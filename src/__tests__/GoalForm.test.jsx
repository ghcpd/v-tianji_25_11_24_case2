import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import GoalForm from '../components/GoalForm'

test('GoalForm updates local inputs and calls onSave', () => {
  const onSave = vi.fn()
  const { getByLabelText, getByText } = render(<GoalForm goals={{ weight: 76, bodyFat: 18 }} onSave={onSave} />)

  const weightInput = getByLabelText(/Weight Goal/i)
  fireEvent.change(weightInput, { target: { value: '74' } })

  const save = getByText(/Save Goals/i)
  fireEvent.click(save)

  expect(onSave).toHaveBeenCalledWith({ weight: 74, bodyFat: 18 })
})
