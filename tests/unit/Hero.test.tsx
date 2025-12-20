import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />)

    expect(screen.getByText('Premium Elektrisch')).toBeInTheDocument()
    expect(screen.getByText('Taxi Service')).toBeInTheDocument()
  })

  it('renders all CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /bel direct/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /offerte aanvragen/i })).toBeInTheDocument()
  })

  it('has correct phone link', () => {
    render(<Hero />)

    const phoneLink = screen.getByRole('link', { name: /bel direct/i })
    expect(phoneLink).toHaveAttribute('href', 'tel:+31620172767')
  })

  it('has correct WhatsApp link', () => {
    render(<Hero />)

    const whatsappLink = screen.getByRole('link', { name: /whatsapp/i })
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/31620172767')
    expect(whatsappLink).toHaveAttribute('target', '_blank')
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders trust indicators', () => {
    render(<Hero />)

    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Elektrisch')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Beschikbaar')).toBeInTheDocument()
  })

  it('renders the badge with correct text', () => {
    render(<Hero />)

    expect(screen.getByText(/100% Elektrisch/)).toBeInTheDocument()
    expect(screen.getByText(/100% Tesla/)).toBeInTheDocument()
    expect(screen.getByText(/100% Duurzaam/)).toBeInTheDocument()
  })
})
