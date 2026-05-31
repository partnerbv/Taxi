import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
}))

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />)

    expect(screen.getByAltText('Enjoy Taxi Logo')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)

    // Desktop and mobile nav links can both be present
    expect(screen.getAllByRole('link', { name: /^home$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /tarieven/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /diensten/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /locaties/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0)
  })

  it('renders the Bel Nu call button', () => {
    render(<Header />)

    const callButtons = screen.getAllByRole('link', { name: /bel/i })
    expect(callButtons.length).toBeGreaterThan(0)
  })

  it('toggles the mobile menu when the button is clicked', () => {
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /menu openen/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('has correct link to homepage', () => {
    render(<Header />)

    const homeLink = screen.getByRole('link', { name: /terug naar home/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
