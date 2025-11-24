import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App dashboard', () => {
  it('renders weekly dashboard by default', () => {
    render(<App />)

    expect(screen.getByText(/Fitness Progress Tracker/i)).toBeInTheDocument()
    expect(screen.getByText(/Weekly Overview/i)).toBeInTheDocument()
    expect(screen.getByText(/Total Steps/i)).toBeInTheDocument()
    expect(screen.getByTestId('weekly-breakdown')).toHaveTextContent('Mon')
  })

  it('toggles to monthly view when user clicks Monthly', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByTestId('toggle-month'))

    expect(screen.getByText(/Monthly Overview/i)).toBeInTheDocument()
    expect(screen.getByTestId('weekly-breakdown')).toHaveTextContent('Week 1')
  })

  it('shows goal cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /^Sleep$/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Goal/i).length).toBeGreaterThan(0)
  })
})
