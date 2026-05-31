import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByText(/Den Haag/).length).toBeGreaterThan(0)
  })

  it('renders phone and WhatsApp CTA links', () => {
    render(<Hero />)

    expect(screen.getAllByRole('link', { name: /bel/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /whatsapp/i }).length).toBeGreaterThan(0)
  })

  it('has correct phone link', () => {
    render(<Hero />)

    const phoneLink = screen.getAllByRole('link', { name: /bel/i })[0]
    expect(phoneLink).toHaveAttribute('href', 'tel:+31620172767')
  })

  it('has correct WhatsApp link', () => {
    render(<Hero />)

    const whatsappLink = screen.getAllByRole('link', { name: /whatsapp/i })[0]
    expect(whatsappLink.getAttribute('href')).toContain('wa.me/31620172767')
    expect(whatsappLink).toHaveAttribute('target', '_blank')
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the benefit pills', () => {
    render(<Hero />)

    expect(screen.getByText('Vaste prijzen')).toBeInTheDocument()
    expect(screen.getByText('Professionele chauffeurs')).toBeInTheDocument()
    expect(screen.getByText('24/7 bereikbaar')).toBeInTheDocument()
  })
})
