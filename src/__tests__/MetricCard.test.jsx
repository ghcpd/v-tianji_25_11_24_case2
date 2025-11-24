import React from 'react'
import { render } from '@testing-library/react'
import MetricCard from '../components/MetricCard'

describe('MetricCard', () => {
  test('renders metric with value and unit', () => {
    const { getByText } = render(<MetricCard metric={{ name: 'Weight', value: 80, unit: 'kg' }} />)
    expect(getByText('Weight')).toBeInTheDocument()
    expect(getByText('80')).toBeInTheDocument()
    expect(getByText('kg')).toBeInTheDocument()
  })
})
