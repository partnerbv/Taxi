import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ReviewsSection from '@/components/ReviewsSection'
import LocationSEOSection from '@/components/LocationSEOSection'

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
    images: [{ url: '/taxi-vredespaleis.webp', width: 1200, height: 630, alt: 'Enjoy Taxi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Den Haag & Leiden | 24/7 Betrouwbare Service | Enjoy Taxi',
    description:
      'Enjoy Taxi - uw betrouwbare taxi service in Den Haag en Leiden. 24/7 beschikbaar met vaste prijzen. Schiphol transfers, zakelijk vervoer en meer.',
  },
  alternates: { canonical: 'https://enjoytaxi.nl' },
}

const faqs = [
  {
    q: 'Hoe kan ik een taxi in Den Haag of Leiden bestellen?',
    a: 'Een taxi bestellen kan eenvoudig telefonisch of via WhatsApp. Enjoy Taxi is 24/7 bereikbaar. Na uw boeking weet u direct de vaste ritprijs. Snel, eenvoudig en betrouwbaar.',
  },
  {
    q: 'Wat zijn de taxi tarieven?',
    a: 'Onze tarieven zijn vast en transparant. Taxi naar Schiphol: vanaf €79. Naar Rotterdam The Hague Airport: vanaf €55. Naar Eindhoven Airport: vanaf €149. De prijs die u hoort is inclusief BTW.',
  },
  {
    q: 'Betaal ik extra voor nachtritten of bagage?',
    a: 'Nee. Bij Enjoy Taxi betaalt u geen nachttoeslag, geen bagagetoeslag en geen extra kosten voor koffers. De afgesproken prijs is de prijs die u betaalt, all-in inclusief BTW.',
  },
  {
    q: 'Hoe snel is er een taxi beschikbaar?',
    a: 'Wij zijn 24 uur per dag, 7 dagen per week beschikbaar in Den Haag, Leiden en omgeving. U kunt ook vooraf reserveren, bijvoorbeeld voor een vroege vlucht naar Schiphol.',
  },
  {
    q: 'In welke gebieden rijden jullie?',
    a: 'Wij rijden door heel Den Haag en de regio (Wassenaar, Voorburg, Leidschendam, Rijswijk, Scheveningen, Delft) én de Leidse regio (Leiden, Katwijk, Noordwijk, Voorschoten, Oegstgeest). Ook luchthavenvervoer naar Schiphol, Rotterdam en Eindhoven.',
  },
  {
    q: 'Kan ik gratis annuleren?',
    a: 'Ja, u kunt uw taxirit kosteloos annuleren tot 1 uur voor de geplande ophaaltijd. Plannen veranderd? Bel of WhatsApp ons en wij regelen het direct.',
  },
]

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
            description:
              'Betrouwbare taxi service in Den Haag en Leiden. 24/7 beschikbaar voor luchthaven transfers, zakelijk vervoer en VIP service.',
            telephone: '+31620172767',
            email: 'info@enjoytaxi.nl',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Den Haag',
              addressRegion: 'Zuid-Holland',
              addressCountry: 'NL',
            },
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
            description:
              'Betrouwbare taxi service voor Den Haag, Leiden en omgeving. Luchthaven transfers, zakelijk vervoer, evenementen en VIP service.',
            provider: { '@id': 'https://enjoytaxi.nl/#organization' },
            serviceType: 'Taxi Service',
            areaServed: [
              { '@type': 'City', name: 'Den Haag' },
              { '@type': 'City', name: 'Leiden' },
              { '@type': 'City', name: 'Delft' },
              { '@type': 'Airport', name: 'Schiphol Airport', iataCode: 'AMS' },
              { '@type': 'Airport', name: 'Rotterdam The Hague Airport', iataCode: 'RTM' },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Tarieven */}
      <PricingSection />

      {/* 3. Diensten */}
      <ServicesSection />

      {/* 4. Waarom wij */}
      <WhyChooseUs />

      {/* 5. Reviews */}
      <ReviewsSection />

      {/* 6. Locaties */}
      <LocationSEOSection />

      {/* 7. FAQ */}
      <section className="py-20 md:py-28 bg-accent-50">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-primary-700 text-sm font-semibold">Veelgestelde Vragen</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-3">
              Taxi Den Haag &amp; Leiden — <span className="text-gradient-blue">FAQ</span>
            </h2>
            <p className="text-accent-600 max-w-2xl mx-auto">
              Antwoorden op de meest gestelde vragen over onze taxiservice.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl border border-accent-100 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                  <h3 className="font-semibold text-accent-900 pr-4">{f.q}</h3>
                  <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-accent-600">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
