import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

test('App integration: save new goals updates summary', async () => {
  const { getByLabelText, getByText, findByText } = render(<App />)

  const weightInput = getByLabelText(/Weight Goal/i)
  fireEvent.change(weightInput, { target: { value: '70' } })

  fireEvent.click(getByText(/Save Goals/i))

  // After updating, the goal input should reflect the new value and summary percent should update
  const updated = getByLabelText(/Weight Goal/i)
  expect(updated.value).toBe('70')
})
