import { render, screen } from '@testing-library/react'
import MetricsCard from '../../src/components/MetricsCard'

describe('MetricsCard', () => {
  it('displays title, value, and delta correctly', () => {
    render(<MetricsCard id="1" title="Weight" value="72 kg" delta={-0.5} />)
    expect(screen.getByText(/Weight/i)).toBeInTheDocument()
    expect(screen.getByText(/72 kg/i)).toBeInTheDocument()
    expect(screen.getByText(/-0.5/)).toBeInTheDocument()
  })
})
