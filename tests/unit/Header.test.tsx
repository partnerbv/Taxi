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

    // Use getAllByRole since there are desktop and mobile nav links
    expect(screen.getAllByRole('link', { name: /^home$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /diensten/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /over ons/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0)
  })

  it('renders the Boek Nu button', () => {
    render(<Header />)

    const bookButtons = screen.getAllByRole('link', { name: /boek nu/i })
    expect(bookButtons.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /toggle navigatiemenu/i })

    // Initially mobile menu should be collapsed
    fireEvent.click(menuButton)

    // After click, menu should be expanded
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('has correct link to homepage', () => {
    render(<Header />)

    const homeLink = screen.getByRole('link', { name: /enjoy taxi home/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
