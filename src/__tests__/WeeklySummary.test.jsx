import React from 'react'
import { render } from '@testing-library/react'
import WeeklySummary from '../components/WeeklySummary'

test('WeeklySummary computes progress to goal', () => {
  const metrics = [{ name: 'Weight', value: 80 }]
  const { getByText } = render(<WeeklySummary metrics={metrics} goals={{ weight: 75 }} />)
  expect(getByText(/80 kg/)).toBeInTheDocument()
  expect(getByText(/%/)).toBeInTheDocument()
})
