import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Taxi Diensten Den Haag & Leiden | Luchthaven Transfer, Zakelijk, VIP | Enjoy Taxi',
  description:
    'Premium elektrische taxi diensten in Den Haag en Leiden. Luchthaven transfers naar Schiphol, zakelijk vervoer, evenementen en VIP service. 100% Tesla vloot, 24/7 beschikbaar.',
  keywords: [
    'taxi diensten den haag',
    'luchthaven transfer schiphol',
    'zakelijk vervoer leiden',
    'vip taxi service',
    'tesla taxi',
    'elektrische taxi',
    'evenementen vervoer',
  ],
  openGraph: {
    title: 'Premium Taxi Diensten | Enjoy Taxi Den Haag & Leiden',
    description:
      'Ontdek onze premium elektrische taxi diensten. Van Schiphol transfers tot VIP service met onze Tesla vloot.',
    url: 'https://enjoytaxi.nl/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl/services',
  },
}

const services = [
  {
    id: 'luchthaven',
    title: 'Luchthaven Transfer',
    subtitle: 'Zorgeloos naar uw vlucht',
    description:
      'Stressvrij van en naar Schiphol of Rotterdam The Hague Airport. Wij monitoren uw vluchtstatus en passen de ophaaltijd automatisch aan bij vertragingen.',
    features: [
      'Vaste prijzen, geen verrassingen',
      'Vlucht monitoring - wij volgen uw aankomsttijd',
      'Meet & greet service op de luchthaven',
      'Ruimte voor bagage en handbagage',
      '24/7 beschikbaar, ook voor vroege vluchten',
      'Gratis wachttijd bij vertraging (tot 30 min)',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'zakelijk',
    title: 'Zakelijk Vervoer',
    subtitle: 'Professioneel & discreet',
    description:
      'Maak indruk op uw zakenpartners met onze premium Tesla service. Discrete service, WiFi aan boord en opladers voor al uw devices.',
    features: [
      'Professionele, discrete chauffeurs',
      'WiFi en USB-C/Lightning opladers',
      'Flexibele facturatie (BTW-specificatie)',
      'Zakelijke accounts met korting',
      'Prioriteit reserveringen 24/7',
      'Maandelijkse facturatie mogelijk',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'evenementen',
    title: 'Evenementen Vervoer',
    subtitle: 'Maak het onvergetelijk',
    description:
      'Van bruiloften tot congressen, van galadiner tot sportevenement. Meerdere Tesla voertuigen beschikbaar voor groepsvervoer in stijl.',
    features: [
      'Meerdere Tesla voertuigen beschikbaar',
      'Professionele coördinatie groepsvervoer',
      'Speciale decoratie op aanvraag (bruiloft)',
      'Flexibele planning en routes',
      'Ervaren event chauffeurs',
      'Shuttle service voor gasten',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'vip',
    title: 'VIP Service',
    subtitle: 'Ultieme luxe & privacy',
    description:
      'Exclusieve service voor de meest veeleisende reizigers. Maximale privacy, persoonlijke aandacht en onze beste voertuigen.',
    features: [
      'Tesla Model S of Model X',
      'Persoonlijke vaste chauffeur',
      'Maximale privacy & discretie',
      'Complimentary versnaperingen',
      'Priority service & flexibiliteit',
      'Concierge service op aanvraag',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-500',
  },
]

const airportPrices = [
  {
    airport: 'Schiphol Airport',
    code: 'AMS',
    price: 79,
    duration: '45 min',
  },
  {
    airport: 'Rotterdam Airport',
    code: 'RTM',
    price: 55,
    duration: '25 min',
  },
  {
    airport: 'Eindhoven Airport',
    code: 'EIN',
    price: 149,
    duration: '90 min',
  },
]

const faqs = [
  {
    question: 'Hoe ver van tevoren moet ik boeken?',
    answer:
      'Voor reguliere ritten kunt u tot 2 uur van tevoren boeken. Voor luchthaven transfers en evenementen raden wij aan minimaal 24 uur van tevoren te reserveren om beschikbaarheid te garanderen.',
  },
  {
    question: 'Wat zijn de betalingsmogelijkheden?',
    answer:
      'Wij accepteren contant, PIN, creditcard en facturatie voor zakelijke klanten. Bij zakelijke accounts is maandelijkse facturatie mogelijk.',
  },
  {
    question: 'Wat gebeurt er bij vertraging van mijn vlucht?',
    answer:
      'Wij monitoren alle vluchten in real-time. Bij vertraging passen wij automatisch de ophaaltijd aan. Tot 30 minuten wachttijd is gratis inbegrepen bij luchthaven transfers.',
  },
  {
    question: 'Hoeveel bagage kan ik meenemen?',
    answer:
      'In onze Tesla voertuigen passen 2-3 grote koffers en handbagage. Neem bij twijfel contact met ons op.',
  },
  {
    question: 'Zijn er kinderzitjes beschikbaar?',
    answer:
      'Ja, wij hebben kinderzitjes en verhogingen beschikbaar. Geef dit aan bij uw reservering zodat wij het juiste zitje klaar kunnen zetten.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Taxi Service',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Enjoy Taxi',
              url: 'https://enjoytaxi.nl',
            },
            areaServed: [
              { '@type': 'City', name: 'Den Haag' },
              { '@type': 'City', name: 'Leiden' },
              { '@type': 'City', name: 'Delft' },
            ],
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/airport.webp"
            alt="Taxi naar Schiphol - Luchthaven Transfer"
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
              <span className="text-white">Diensten</span>
            </nav>

            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Premium Tesla Vloot</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Onze Taxi Diensten
              <span className="block text-primary-300">Den Haag & Leiden</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Van luchthaven transfers tot exclusieve VIP service. Ontdek hoe Enjoy
              Taxi u in stijl en comfort naar uw bestemming brengt.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">100% Tesla</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Vaste Tarieven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/airport.webp"
                  alt="Taxi naar Schiphol - Luchthaven Transfer"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  quality={85}
                />
                {/* Glossy overlay badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-secondary-800">Flight Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary-200/50" />
            </div>

            {/* Right - Content & Pricing */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Luchthaven Transfers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Taxi naar de Luchthaven
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Stressvrij naar Schiphol of Rotterdam Airport. Vaste prijzen, flight tracking en 30 minuten gratis wachttijd bij vertragingen.
              </p>

              {/* Pricing Cards */}
              <div className="space-y-3 mb-8">
                {airportPrices.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl border border-secondary-200 p-4 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                          <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary-900">{item.airport}</h3>
                          <div className="flex items-center gap-2 text-secondary-500 text-sm">
                            <span className="px-2 py-0.5 bg-secondary-100 rounded text-xs font-medium">{item.code}</span>
                            <span>•</span>
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-secondary-500">vanaf</div>
                        <div className="text-2xl font-bold text-primary-600">&euro;{item.price}<span className="text-sm">,-</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features row */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vaste prijs
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bagage inbegrepen
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  30 min gratis wachttijd
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+31620172767"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel Nu
                </a>
                <Link href="/schiphol" className="inline-flex items-center justify-center px-8 py-4 bg-secondary-100 text-secondary-900 font-semibold rounded-xl hover:bg-secondary-200 transition-colors">
                  Meer over Schiphol
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Onze Diensten
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Premium Taxi Service
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Van luchthaven transfers tot VIP service - wij bieden een complete range aan premium taxi diensten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-secondary-200 p-8 hover:shadow-xl transition-all duration-300 scroll-mt-32"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">{service.title}</h3>
                    <p className="text-primary-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-secondary-600">
                      <svg
                        className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href="https://wa.me/31620172767" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a href="tel:+31620172767" className="inline-flex items-center px-5 py-2.5 bg-secondary-100 text-secondary-700 text-sm font-semibold rounded-lg hover:bg-secondary-200 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Bel Direct
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                Waarom Enjoy Taxi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                100% Tesla, 100% Elektrisch
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Onze volledige vloot bestaat uit premium Tesla voertuigen. Zero emissie, maximaal comfort en de nieuwste technologie.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">100% Elektrisch</h4>
                    <p className="text-sm text-secondary-500">Zero emissie rijden</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">24/7 Service</h4>
                    <p className="text-sm text-secondary-500">Altijd beschikbaar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Vaste Prijzen</h4>
                    <p className="text-sm text-secondary-500">Geen verrassingen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Premium Comfort</h4>
                    <p className="text-sm text-secondary-500">Luxe interieur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enjoy Taxi in Cijfers</h3>
                  <p className="text-white/70 text-sm">Onze prestaties spreken voor zich</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm text-white/70">Elektrisch</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">1000+</div>
                    <div className="text-sm text-white/70">Klanten</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">5.0</div>
                    <div className="text-sm text-white/70">Rating</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-white/70">Beschikbaar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Veelgestelde Vragen</h2>
            <p className="text-lg text-secondary-600">
              Antwoorden op de meest gestelde vragen over onze diensten.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-secondary-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-secondary-50 transition-colors">
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
      </section>

      {/* CTA Section */}
      <CTASection
        title="Klaar voor Premium Elektrisch Vervoer?"
        subtitle="Neem contact op voor een vrijblijvende offerte of boek direct uw rit in Den Haag of Leiden."
      />
    </>
  )
}
