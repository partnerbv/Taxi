import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ReviewList from '@/components/ReviewList'

export const metadata: Metadata = {
  title: 'Over Enjoy Taxi Den Haag | Betrouwbare Taxi Service | Vaste Prijzen',
  description:
    'Over Enjoy Taxi: betrouwbare taxi service in Den Haag. ✓ Professionele chauffeurs ✓ Duurzaam ✓ Comfortabel reizen ✓ 24/7 service.',
  keywords: [
    'enjoy taxi den haag',
    'taxi vaste prijzen',
    'taxi vaste prijs den haag',
    'betaalbare taxi den haag',
    'duurzame taxi',
  ],
  openGraph: {
    title: 'Over Enjoy Taxi Den Haag | Betrouwbare Taxi Service | Vaste Prijzen',
    description:
      'Over Enjoy Taxi: betrouwbare taxi service in Den Haag. Professionele chauffeurs, duurzaam, comfortabel reizen, 24/7 service.',
    url: 'https://enjoytaxi.nl/about',
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: 'https://enjoytaxi.nl/taxi-vredespaleis.webp', width: 1200, height: 630, alt: 'Enjoy Taxi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over Enjoy Taxi Den Haag | Betrouwbare Taxi Service | Vaste Prijzen',
    description:
      'Over Enjoy Taxi: betrouwbare taxi service in Den Haag. Professionele chauffeurs, duurzaam, comfortabel reizen, 24/7 service.',
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl/about',
  },
}

const values = [
  {
    title: 'Duurzaamheid',
    description:
      'Wij rijden volledig elektrisch met de Mercedes EQS. Comfortabel reizen én een schonere stad gaan bij ons hand in hand.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Betrouwbaarheid',
    description:
      'Op tijd, elke keer. Wij begrijpen dat uw tijd kostbaar is en zorgen ervoor dat u altijd op uw bestemming aankomt wanneer gepland.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellentie',
    description:
      'Van onze voertuigen tot onze chauffeurs, alles is gericht op het bieden van de best mogelijke ervaring voor onze klanten.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Innovatie',
    description:
      'Wij blijven vooroplopen in technologie en service. Moderne voertuigen, geavanceerde boekingssystemen en continue verbetering.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const principles = [
  { title: 'Vaste prijzen vooraf', description: 'U weet altijd wat u betaalt — geen verrassingen, ook niet bij files of nachtritten.' },
  { title: 'Persoonlijke service', description: 'Een herkenbaar gezicht achter het stuur en aandacht voor elke rit, geen anonieme taxi.' },
  { title: 'Comfortabel & elektrisch', description: 'Reizen in een volledig elektrische Mercedes EQS — stil, schoon en comfortabel.' },
  { title: '24/7 in Den Haag & Leiden', description: 'Dag en nacht bereikbaar voor heel Den Haag, Leiden en omgeving.' },
]

const stats = [
  { value: '24/7', label: 'Beschikbaar' },
  { value: 'Vast', label: 'Tarieven' },
  { value: 'EQS', label: 'Elektrische Mercedes' },
  { value: '0', label: 'Toeslagen' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/taxi-vredespaleis.webp"
            alt="Over Enjoy Taxi - Ons Verhaal"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/90 to-primary-900/80" />
          {/* Color glow effects */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-400/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60L0 35C180 45 360 25 540 20C720 15 900 25 1080 32C1260 40 1350 45 1440 48L1440 60H0Z" fill="white" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Over Ons</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              De Toekomst van
              <span className="block text-gradient-blue">Betrouwbaar Vervoer</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Enjoy Taxi is geboren uit de overtuiging dat comfortabel vervoer en
              duurzaamheid perfect samengaan. Wij brengen u in stijl naar uw
              bestemming, zonder compromissen.
            </p>

            {/* USP Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-white">Betaalbare Prijzen</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-white">24/7 Service</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-white">Professioneel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-secondary-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Van Visie naar Realiteit
              </h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  Enjoy Taxi begon met een simpele overtuiging: betrouwbaar
                  vervoer hoeft niet ten koste te gaan van comfort, eerlijkheid
                  of het milieu.
                </p>
                <p>
                  Daarom rijden wij in een volledig elektrische Mercedes EQS,
                  werken we met vaste prijzen die u vooraf kent, en staan we
                  24/7 voor u klaar — met persoonlijke service in plaats van
                  een anonieme rit.
                </p>
                <p>
                  Of u nu naar Schiphol moet, een zakelijke afspraak heeft of
                  een avondje uit: wij brengen u stil, schoon en comfortabel
                  naar uw bestemming in Den Haag, Leiden en omgeving.
                </p>
              </div>
            </div>

            {/* Principes Visual */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-primary-300" />
              <div className="space-y-8">
                {principles.map((principle, index) => (
                  <div key={principle.title} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-primary">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <div className="card">
                      <h3 className="font-semibold text-secondary-900 mb-1">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-secondary-500">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Waar Wij Voor Staan
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Onze kernwaarden vormen de basis van alles wat we doen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">
              Gedreven Professionals
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Ons team bestaat uit ervaren professionals die passie delen voor
              betrouwbare service en duurzaamheid. Elke chauffeur is zorgvuldig
              geselecteerd en getraind om u de beste ervaring te bieden.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="text-2xl font-bold text-primary-600 mb-2">Ervaren</div>
                <p className="text-secondary-600">Professionele chauffeurs</p>
              </div>
              <div className="card">
                <div className="text-2xl font-bold text-primary-600 mb-2">Persoonlijk</div>
                <p className="text-secondary-600">Herkenbare gezichten</p>
              </div>
              <div className="card">
                <div className="text-2xl font-bold text-primary-600 mb-2">Elektrisch</div>
                <p className="text-secondary-600">Mercedes EQS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewList />

      {/* CTA Section */}
      <CTASection
        title="Ontdek het Enjoy Taxi Verschil"
        subtitle="Ervaar zelf het gemak van vaste prijzen, persoonlijke service en comfortabel elektrisch vervoer."
      />
    </>
  )
}
