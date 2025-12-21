import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ReviewList from '@/components/ReviewList'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: 'Taxi naar Schiphol | Vaste Prijzen vanaf €35 | Enjoy Taxi',
  description:
    'Taxi naar Schiphol vanaf Den Haag €55, Leiden €35. ✓ Vaste prijzen ✓ Flight tracking ✓ 24/7 beschikbaar ✓ Tesla comfort. Boek nu uw Schiphol taxi!',
  keywords: [
    'taxi schiphol',
    'schiphol taxi',
    'taxi naar schiphol',
    'schiphol airport taxi',
    'taxi den haag schiphol',
    'taxi leiden schiphol',
    'luchthaven taxi',
    'airport transfer schiphol',
    'schiphol vervoer',
    'taxi schiphol vaste prijs',
  ],
  openGraph: {
    title: 'Taxi naar Schiphol | Vaste Prijzen vanaf €35 | Enjoy Taxi',
    description:
      'Premium taxi naar Schiphol Airport. Vaste prijzen, flight tracking, 24/7 beschikbaar. Tesla comfort voor uw luchthaven transfer.',
    url: 'https://enjoytaxi.nl/schiphol',
    images: [
      {
        url: '/Taxi naar Schiphol .webp',
        width: 1200,
        height: 630,
        alt: 'Taxi naar Schiphol - Enjoy Taxi',
      },
    ],
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl/schiphol',
  },
}

const services = [
  {
    title: 'Schiphol Transfer',
    description: 'Comfortabel van en naar Schiphol Airport met vaste prijzen.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    href: '#prijzen',
  },
  {
    title: 'Flight Tracking',
    description: 'Wij volgen uw vlucht. Bij vertraging passen wij de ophaaltijd aan.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '#hoe-werkt-het',
  },
  {
    title: 'Zakelijk Vervoer',
    description: 'Professionele luchthaven transfers voor zakelijke reizigers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services#zakelijk',
  },
  {
    title: 'Groepsvervoer',
    description: 'Meerdere passagiers? Wij regelen vervoer voor uw hele groep.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: '/contact',
  },
]

const features = [
  {
    title: 'Vaste Schiphol Prijzen',
    description: 'Geen verrassingen. Ook niet bij files of vertragingen.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Flight Tracking',
    description: 'Wij volgen uw vlucht en passen de ophaaltijd automatisch aan.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: '30 Min Gratis Wachten',
    description: 'Bij ophalen op Schiphol wachten wij 30 minuten gratis.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Tesla Comfort',
    description: 'Reis in stijl met onze luxe Tesla vloot naar Schiphol.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const schipholPrices = [
  {
    location: 'Leiden',
    price: 35,
    duration: '25 min',
    popular: false,
  },
  {
    location: 'Den Haag',
    price: 55,
    duration: '35 min',
    popular: true,
  },
  {
    location: 'Delft',
    price: 45,
    duration: '30 min',
    popular: false,
  },
  {
    location: 'Zoetermeer',
    price: 50,
    duration: '30 min',
    popular: false,
  },
  {
    location: 'Wassenaar',
    price: 50,
    duration: '30 min',
    popular: false,
  },
  {
    location: 'Voorburg',
    price: 50,
    duration: '30 min',
    popular: false,
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Boek Uw Schiphol Taxi',
    description: 'Bel, WhatsApp of vul het formulier in. Vermeld uw vluchtgegevens.',
  },
  {
    step: '2',
    title: 'Ontvang Bevestiging',
    description: 'U ontvangt direct een bevestiging met vaste prijs en chauffeurgegevens.',
  },
  {
    step: '3',
    title: 'Wij Volgen Uw Vlucht',
    description: 'Flight tracking zorgt dat wij altijd op tijd staan, ook bij vertraging.',
  },
  {
    step: '4',
    title: 'Comfortabel Reizen',
    description: 'Uw chauffeur staat klaar. Geniet van de Tesla rit naar of van Schiphol.',
  },
]

export default function SchipholPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Taxi naar Schiphol - Enjoy Taxi',
            description: 'Premium taxi service naar Schiphol Airport vanuit Den Haag, Leiden en omgeving. Vaste prijzen, flight tracking en 24/7 beschikbaar.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Enjoy Taxi',
              telephone: '+31620172767',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Den Haag',
                addressRegion: 'Zuid-Holland',
                addressCountry: 'NL',
              },
            },
            areaServed: [
              { '@type': 'City', name: 'Den Haag' },
              { '@type': 'City', name: 'Leiden' },
              { '@type': 'City', name: 'Delft' },
              { '@type': 'City', name: 'Zoetermeer' },
              { '@type': 'Airport', name: 'Schiphol Airport', iataCode: 'AMS' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Schiphol Taxi Tarieven',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Taxi Leiden - Schiphol' },
                  price: '35',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Taxi Den Haag - Schiphol' },
                  price: '55',
                  priceCurrency: 'EUR',
                },
              ],
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
            name: 'Schiphol Taxi Service - Enjoy Taxi',
            description: 'Betrouwbare taxi service naar Schiphol Airport met vaste prijzen en flight tracking.',
            provider: {
              '@type': 'Organization',
              name: 'Enjoy Taxi',
              url: 'https://enjoytaxi.nl',
            },
            serviceType: 'Airport Transfer',
            areaServed: {
              '@type': 'Airport',
              name: 'Amsterdam Airport Schiphol',
              iataCode: 'AMS',
            },
          }),
        }}
      />

      {/* Hero Section - Same style as homepage */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Taxi naar Schiphol .webp"
            alt="Taxi naar Schiphol - Premium Luchthaven Transfer"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay with color glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-primary-900/70" />
          {/* Color glow effects */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Vaste Prijzen naar Schiphol
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Taxi naar{' '}
                <span className="text-primary-300">Schiphol</span>
                <br />
                Vanaf €35
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                Stressvrij naar Schiphol Airport met onze premium Tesla taxi service.
                Vaste prijzen, flight tracking en 30 minuten gratis wachttijd.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:+31620172767"
                  className="inline-flex items-center justify-center px-7 py-3.5 font-semibold text-primary-600 text-sm bg-white rounded-lg transition-all duration-200 hover:bg-primary-50 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Boek Nu
                </a>
                <a
                  href="https://wa.me/31620172767?text=Hallo, ik wil graag een taxi naar Schiphol boeken."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 font-semibold text-white text-sm bg-transparent border border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* USP Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-white">Vaste Prijzen</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-sm font-medium text-white">Flight Tracking</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-white">24/7 Service</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                {/* Plane Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-6">Schiphol Taxi Voordelen</h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">€35</div>
                    <div className="text-xs text-white/70">Vanaf Leiden</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-white/70">Beschikbaar</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary-300 mb-1">30 min</div>
                    <div className="text-xs text-white/70">Gratis Wachten</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-white/70">Tesla</div>
                  </div>
                </div>

                {/* Quick Book CTA */}
                <Link
                  href="/contact"
                  className="block w-full bg-white text-primary-600 font-semibold py-3.5 px-6 rounded-lg text-center hover:bg-primary-50 transition-colors text-sm"
                >
                  Boek Schiphol Taxi
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] md:h-[80px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L0 60C240 80 480 40 720 40C960 40 1200 80 1440 60L1440 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Schiphol Pricing Section */}
      <section id="prijzen" className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Schiphol Tarieven
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Vaste Prijzen naar Schiphol
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Geen verrassingen, ook niet bij files of vertragingen. Onze Schiphol taxi tarieven zijn all-inclusive: bagage, flight tracking en 30 minuten gratis wachttijd.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                  <div className="text-2xl font-bold text-primary-600">€35</div>
                  <div className="text-sm text-secondary-500">Vanaf</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-secondary-500">Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                  <div className="text-2xl font-bold text-primary-600">30 min</div>
                  <div className="text-sm text-secondary-500">Gratis Wachten</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi naar Schiphol .webp"
                  alt="Taxi naar Schiphol"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary-200 -z-10" />
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {schipholPrices.map((item) => (
              <div
                key={item.location}
                className={`group p-5 bg-white rounded-xl border transition-all text-center ${
                  item.popular
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20'
                    : 'border-secondary-200 hover:border-primary-300 hover:shadow-lg'
                }`}
              >
                {item.popular && (
                  <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                    Populair
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {item.location}
                </h3>
                <div className="text-2xl font-bold text-primary-600 mt-2">€{item.price}</div>
                <p className="text-xs text-secondary-500 mt-1">{item.duration}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <a
              href="tel:+31620172767"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Boek Nu - Bel Direct
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Same style as homepage */}
      <section className="relative py-24 bg-gradient-to-b from-secondary-50 via-white to-secondary-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Schiphol Diensten</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Taxi Service naar <span className="text-primary-600">Schiphol</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Alles voor een zorgeloze reis naar Schiphol Airport. Van flight tracking tot groepsvervoer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-amber-500',
                'from-emerald-500 to-teal-500',
              ]
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative p-8 bg-white border border-secondary-200 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">{service.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                      Meer info
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section - Same style as homepage */}
      <section id="hoe-werkt-het" className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi.jpg"
                  alt="Schiphol Taxi Service - Enjoy Taxi"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary-100 -z-10" />
              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-secondary-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">Flight Tracking</div>
                    <div className="text-sm text-secondary-500">Automatisch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                Hoe Werkt Het
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Schiphol Taxi Boeken in 4 Stappen
              </h2>
              <p className="text-lg text-secondary-600 mb-10">
                Uw Schiphol taxi boeken is eenvoudig. Wij zorgen voor de rest.
              </p>

              <div className="space-y-6">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                      <p className="text-secondary-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="tel:+31620172767"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel Nu
                </a>
                <a
                  href="https://wa.me/31620172767?text=Hallo, ik wil graag een taxi naar Schiphol boeken."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Same style as homepage */}
      <section className="section-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow-accent">Waarom Enjoy Taxi</span>
              <h2 className="heading-2 mb-6">
                Uw Betrouwbare Schiphol Taxi
              </h2>
              <p className="text-lead mb-10">
                Al jaren de betrouwbare keuze voor luchthaven transfers. Tesla comfort, vaste prijzen en altijd op tijd.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-secondary-200 flex items-center justify-center flex-shrink-0 text-primary-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-secondary-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-secondary-200 shadow-lg overflow-hidden">
                <div className="bg-primary-600 p-8 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Schiphol Taxi in Cijfers</h3>
                  <p className="text-white/80 text-sm">Onze prestaties spreken voor zich</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-secondary-200">
                  <div className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">1000+</div>
                    <div className="text-sm text-secondary-500">Schiphol Ritten</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                    <div className="text-sm text-secondary-500">Op Tijd</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-600 mb-1">5.0</div>
                    <div className="text-sm text-secondary-500">Rating</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                    <div className="text-sm text-secondary-500">Beschikbaar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewList />

      {/* Trust & Payment Section - Same style as homepage */}
      <section className="relative py-16 bg-gradient-to-r from-secondary-50 via-white to-secondary-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="bg-white rounded-3xl shadow-xl shadow-secondary-900/5 border border-secondary-100 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Trust badges */}
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-6">Waarom klanten ons vertrouwen</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">Verzekerd</div>
                      <div className="text-xs text-secondary-500">Volledig gedekt</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">Gecertificeerd</div>
                      <div className="text-xs text-secondary-500">Ervaren chauffeurs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">5.0 Rating</div>
                      <div className="text-xs text-secondary-500">Klant Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment methods */}
              <div className="lg:border-l lg:border-secondary-200 lg:pl-8">
                <h3 className="text-lg font-bold text-secondary-900 mb-6">Betaalmethoden</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'PIN', icon: '💳' },
                    { name: 'Contant', icon: '💵' },
                    { name: 'Creditcard', icon: '💳' },
                    { name: 'Factuur', icon: '📄' },
                    { name: 'iDEAL', icon: '🏦' },
                  ].map((method) => (
                    <div
                      key={method.name}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary-50 rounded-xl border border-secondary-200 hover:bg-secondary-100 transition-colors"
                    >
                      <span className="text-lg">{method.icon}</span>
                      <span className="text-sm font-medium text-secondary-700">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Same style as homepage */}
      <section className="section-gray">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-eyebrow-accent">FAQ</span>
            <h2 className="heading-2 mb-4">Veelgestelde Vragen over Schiphol Taxi</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                question: 'Wat kost een taxi naar Schiphol?',
                answer: 'Onze Schiphol taxi tarieven zijn vast en all-inclusive. Vanaf Leiden €35, vanaf Den Haag €55, vanaf Delft €45. Geen verrassingen, ook niet bij files.',
              },
              {
                question: 'Hoe boek ik een taxi naar Schiphol?',
                answer: 'U kunt bellen naar 06 2017 2767, WhatsAppen of het contactformulier invullen. Vermeld uw vluchtgegevens zodat wij uw vlucht kunnen volgen.',
              },
              {
                question: "Is de Schiphol taxi ook 's nachts beschikbaar?",
                answer: 'Ja, onze Schiphol taxi service is 24/7 beschikbaar. Ook voor vroege ochtendvluchten of late nachtvluchten kunt u bij ons terecht.',
              },
              {
                question: 'Wat als mijn vlucht vertraging heeft?',
                answer: 'Wij volgen uw vlucht automatisch via flight tracking. Bij vertraging passen wij de ophaaltijd aan. Bovendien wachten wij 30 minuten gratis op Schiphol.',
              },
              {
                question: 'Is bagage inbegrepen in de prijs?',
                answer: 'Ja, standaard bagage (koffers en handbagage) is inbegrepen. Voor bijzondere items zoals ski\'s of fietsen, neem contact met ons op.',
              },
              {
                question: 'Waar word ik opgehaald op Schiphol?',
                answer: 'Onze chauffeur staat klaar bij de afgesproken ontmoetingsplek, meestal bij de aankomsthal. U ontvangt vooraf een bericht met de exacte locatie en het telefoonnummer van de chauffeur.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-secondary-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-secondary-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center group-open:bg-primary-100 transition-colors">
                    <svg
                      className="w-4 h-4 text-secondary-500 group-open:text-primary-600 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Wat kost een taxi naar Schiphol?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Onze Schiphol taxi tarieven zijn vast en all-inclusive. Vanaf Leiden €35, vanaf Den Haag €55, vanaf Delft €45. Geen verrassingen, ook niet bij files.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Hoe boek ik een taxi naar Schiphol?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'U kunt bellen naar 06 2017 2767, WhatsAppen of het contactformulier invullen. Vermeld uw vluchtgegevens zodat wij uw vlucht kunnen volgen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "Is de Schiphol taxi ook 's nachts beschikbaar?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, onze Schiphol taxi service is 24/7 beschikbaar. Ook voor vroege ochtendvluchten of late nachtvluchten kunt u bij ons terecht.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wat als mijn vlucht vertraging heeft?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wij volgen uw vlucht automatisch via flight tracking. Bij vertraging passen wij de ophaaltijd aan. Bovendien wachten wij 30 minuten gratis op Schiphol.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is bagage inbegrepen in de prijs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Ja, standaard bagage (koffers en handbagage) is inbegrepen. Voor bijzondere items zoals ski's of fietsen, neem contact met ons op.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Waar word ik opgehaald op Schiphol?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Onze chauffeur staat klaar bij de afgesproken ontmoetingsplek, meestal bij de aankomsthal. U ontvangt vooraf een bericht met de exacte locatie en het telefoonnummer van de chauffeur.',
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  )
}
