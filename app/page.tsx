import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taxi Den Haag & Leiden | 24/7 Betrouwbare Service | Enjoy Taxi',
  description:
    'Enjoy Taxi - uw betrouwbare taxi service in Den Haag en Leiden. 24/7 beschikbaar met vaste prijzen. Schiphol transfers, zakelijk vervoer en meer. Bel nu 06 2017 2767!',
  keywords: [
    'taxi den haag',
    'taxi leiden',
    'taxi schiphol',
    'schiphol taxi',
    'taxi delft',
    'luchthaven taxi',
    'taxi vaste prijs',
    'betaalbare taxi',
    'taxi service den haag',
    'taxi service leiden',
    'zakelijk vervoer',
    'vip taxi',
    'taxi bestellen',
    '24 uur taxi',
  ],
  openGraph: {
    title: 'Taxi Den Haag & Leiden | 24/7 Betrouwbare Service | Enjoy Taxi',
    description:
      'Enjoy Taxi - uw betrouwbare taxi service in Den Haag en Leiden. 24/7 beschikbaar met vaste prijzen. Schiphol transfers, zakelijk vervoer en meer.',
    url: 'https://enjoytaxi.nl',
    type: 'website',
    locale: 'nl_NL',
    images: [
      {
        url: '/enjoy-taxi.webp',
        width: 1200,
        height: 630,
        alt: 'Enjoy Taxi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Den Haag & Leiden | 24/7 Betrouwbare Service | Enjoy Taxi',
    description:
      'Enjoy Taxi - uw betrouwbare taxi service in Den Haag en Leiden. 24/7 beschikbaar met vaste prijzen. Schiphol transfers, zakelijk vervoer en meer.',
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl',
  },
}

import Hero from '@/components/Hero'
import LocationsSection from '@/components/LocationsSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import ReviewList from '@/components/ReviewList'
import AirportPricing from '@/components/AirportPricing'
import TrustPayment from '@/components/TrustPayment'
import FAQ from '@/components/FAQ'
import FloatingCTA from '@/components/FloatingCTA'

export default function HomePage() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://enjoytaxi.nl/#organization',
            name: 'Enjoy Taxi',
            alternateName: 'Enjoy Taxi Den Haag',
            url: 'https://enjoytaxi.nl',
            logo: 'https://enjoytaxi.nl/logo.png',
            description: 'Betrouwbare taxi service in Den Haag en Leiden. 24/7 beschikbaar voor luchthaven transfers, zakelijk vervoer en VIP service.',
            telephone: '+31620172767',
            email: 'info@enjoytaxi.nl',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Den Haag',
              addressLocality: 'Den Haag',
              addressRegion: 'Zuid-Holland',
              postalCode: '2500',
              addressCountry: 'NL',
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+31620172767',
                contactType: 'customer service',
                availableLanguage: ['Dutch', 'English'],
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              },
              {
                '@type': 'ContactPoint',
                telephone: '+31620172767',
                contactType: 'reservations',
                availableLanguage: ['Dutch', 'English'],
              },
            ],
          }),
        }}
      />

      {/* TaxiService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TaxiService',
            '@id': 'https://enjoytaxi.nl/#taxiservice',
            name: 'Enjoy Taxi - Taxi Den Haag & Leiden',
            description: 'Betrouwbare taxi service voor Den Haag, Leiden en omgeving. Luchthaven transfers, zakelijk vervoer, evenementen en VIP service.',
            provider: {
              '@id': 'https://enjoytaxi.nl/#organization',
            },
            serviceType: 'Taxi Service',
            areaServed: [
              { '@type': 'City', name: 'Den Haag', '@id': 'https://www.wikidata.org/wiki/Q36600' },
              { '@type': 'City', name: 'Leiden', '@id': 'https://www.wikidata.org/wiki/Q43631' },
              { '@type': 'City', name: 'Delft', '@id': 'https://www.wikidata.org/wiki/Q33432984' },
              { '@type': 'City', name: 'Zoetermeer' },
              { '@type': 'City', name: 'Wassenaar' },
              { '@type': 'Airport', name: 'Schiphol Airport', iataCode: 'AMS' },
              { '@type': 'Airport', name: 'Rotterdam The Hague Airport', iataCode: 'RTM' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Taxi Diensten',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Luchthaven Transfer Schiphol',
                    description: 'Taxi van Den Haag of Leiden naar Schiphol Airport',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '79',
                    priceCurrency: 'EUR',
                    minPrice: '79',
                    description: 'Vanaf Den Haag naar Schiphol',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Zakelijk Vervoer',
                    description: 'Professioneel zakelijk vervoer met WiFi aan boord',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'VIP Taxi Service',
                    description: 'VIP service met comfortabel voertuig',
                  },
                },
              ],
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://enjoytaxi.nl/contact',
              servicePhone: '+31620172767',
              availableLanguage: ['Dutch', 'English'],
            },
            termsOfService: 'https://enjoytaxi.nl/terms',
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://enjoytaxi.nl/#localbusiness',
            name: 'Enjoy Taxi Den Haag',
            image: 'https://enjoytaxi.nl/enjoy-taxi.webp',
            url: 'https://enjoytaxi.nl',
            telephone: '+31620172767',
            email: 'info@enjoytaxi.nl',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Den Haag',
              addressRegion: 'Zuid-Holland',
              addressCountry: 'NL',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 52.0705,
              longitude: 4.3007,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Locations Section */}
      <LocationsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Reviews Section */}
      <ReviewList />

      {/* Airport Transfers Section */}
      <AirportPricing />

      {/* Trust & Payment Section */}
      <TrustPayment />

      {/* FAQ Section */}
      <FAQ />

      {/* Floating Mobile CTA */}
      <FloatingCTA />
    </>
  )
}
