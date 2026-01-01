import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Den Haag/)).toBeInTheDocument()
  })

  it('renders all CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /bel direct/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
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

  it('renders USP pills', () => {
    render(<Hero />)

    expect(screen.getByText(/100% Elektrisch met Tesla/)).toBeInTheDocument()
    expect(screen.getByText('100% Tesla')).toBeInTheDocument()
    expect(screen.getByText('24/7 Service')).toBeInTheDocument()
    expect(screen.getByText('Vaste Tarieven')).toBeInTheDocument()
  })
})
