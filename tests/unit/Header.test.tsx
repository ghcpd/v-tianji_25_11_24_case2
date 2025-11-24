import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('renders the header with title and export button', () => {
    render(<Header />)
    expect(screen.getByText(/Fitness Progress Tracker/i)).toBeInTheDocument()
    expect(screen.getByText(/Export/i)).toBeInTheDocument()
  })
})
