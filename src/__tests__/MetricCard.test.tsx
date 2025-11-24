import { render, screen } from '@testing-library/react'
import MetricCard from '../components/MetricCard'

describe('MetricCard', () => {
  it('renders value, unit and change', () => {
    const metric = { id: 'm', title: 'Test', value: 42, unit: 'min', change: 5 }
    render(<MetricCard metric={metric} />)

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('min')).toBeInTheDocument()
    expect(screen.getByText('+5')).toBeInTheDocument()
  })
})
