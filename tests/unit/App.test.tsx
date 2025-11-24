import { render, screen } from '@testing-library/react'
import App from '../../src/App'

describe('App', () => {
  it('renders the header and dashboard', () => {
    render(<App />)
    expect(screen.getByText(/Fitness Progress Tracker/i)).toBeInTheDocument()
    expect(screen.getByText(/Track metrics, goals, and weekly summaries/i)).toBeInTheDocument()
    expect(screen.getByText(/Activity Overview/i)).toBeInTheDocument()
  })
})
