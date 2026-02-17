import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import ReviewList from '@/components/ReviewList'
import FloatingCTA from '@/components/FloatingCTA'
import { locations } from '@/data/locations'

const services = [
  {
    title: 'Luchthaven Transfer',
    description: 'Stressvrij van en naar Schiphol of Rotterdam The Hague Airport.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    href: '/services#luchthaven',
  },
  {
  title: 'Professioneel Vervoer met Comfort en Service | 24/7 Beschikbaar',
  description: 'Betrouwbaar en comfortabel vervoer voor iedere klant. Altijd op tijd. Reserveer eenvoudig online of bel ons.'

  icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  href: '/services#zakelijk',
},

  {
    title: 'Vervoer voor Evenementen | Stijlvol & Betrouwbaar',
description: 'Comfortabel en representatief vervoer voor bruiloften, congressen en bijzondere momenten. Zorgeloos en professioneel geregeld.'

    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services#evenementen',
  },
  {
    title: 'VIP Service',
    description: 'Persoonlijke service met maximale privacy en aandacht.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    href: '/services#vip',
  },
]

const features = [
  {
    title: 'Comfortabele Voertuigen',
    description: 'Comfortabel en representatief vervoer, altijd stipt en professioneel verzorgd.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Maximaal Comfort',
    description: 'Ruime voertuigen met lederen interieur en airco.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: '24/7 Beschikbaar',
    description: 'Dag en nacht bereikbaar voor al uw vervoerswensen.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Vaste Prijzen',
    description: 'Transparante tarieven zonder verrassingen achteraf.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

// Airport pricing
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

const processSteps = [
  {
    step: '1',
    title: 'Bel of WhatsApp',
    description: 'Neem contact op via telefoon of WhatsApp. Wij reageren binnen 5 minuten.',
  },
  {
    step: '2',
    title: 'Ontvang Vaste Prijs',
    description: 'U ontvangt direct een vaste prijs. Geen verrassingen, ook niet bij files.',
  },
  {
    step: '3',
    title: 'Bevestig Uw Rit',
    description: 'Bevestig de boeking. Wij sturen een bevestiging met chauffeurgegevens.',
  },
  {
    step: '4',
    title: 'Geniet van de Rit',
    description: 'Uw chauffeur staat op tijd klaar. Relax en geniet van de comfortabele rit.',
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
            image: 'https://enjoytaxi.nl/enjoy taxi.webp',
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

      {/* Locations Section - Clean Design */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Taxi Den Haag & Omgeving
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Betaalbare taxi service in <strong>Den Haag</strong> en omgeving. Van <strong>Wassenaar</strong> tot <strong>Voorburg</strong>, van <strong>Leidschendam</strong> tot <strong>Scheveningen</strong> - wij rijden overal.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                  <div className="text-2xl font-bold text-primary-600">{locations.length}</div>
                  <div className="text-sm text-secondary-500">Locaties</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-secondary-500">Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-secondary-500">Betrouwbaar</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi-Den-Haag.webp"
                  alt="Taxi Den Haag"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary-200 -z-10" />
            </div>
          </div>

          {/* Location Grid - Wassenaar, Leidschendam and Voorburg first */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {(() => {
              const prioritySlugs = ['wassenaar', 'leidschendam', 'voorburg'];
              const priorityLocations = prioritySlugs
                .map(slug => locations.find(loc => loc.slug === slug))
                .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined);
              const otherLocations = locations.filter(loc =>
                !prioritySlugs.includes(loc.slug)
              ).slice(0, 7);
              return [...priorityLocations, ...otherLocations];
            })().map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group p-5 bg-white rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h3>
                <p className="text-xs text-secondary-500 mt-1">{location.region}</p>
              </Link>
            ))}
          </div>

          {/* Button below grid */}
          <div className="text-center mt-10">
            <Link
              href="/locaties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg"
            >
              Bekijk alle locaties
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Design */}
      <section className="relative py-24 bg-gradient-to-b from-secondary-50 via-white to-secondary-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Taxi Service <span className="text-primary-600">Den Haag</span> & Leiden
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Schiphol transfers, zakelijk vervoer en VIP service - uw betrouwbare taxi in Den Haag en Leiden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const gradients = [
                'from-emerald-500 to-teal-500',
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

          {/* View all services link */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-900 text-white font-semibold rounded-xl hover:bg-secondary-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Bekijk alle diensten
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - Clean Design */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi.jpg"
                  alt="Taxi Service - Chauffeur met klant"
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
                    <div className="font-bold text-secondary-900">5 min</div>
                    <div className="text-sm text-secondary-500">Reactietijd</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                In 4 Stappen Geboekt
              </h2>
              <p className="text-lg text-secondary-600 mb-10">
                Taxi boeken was nog nooit zo makkelijk. Binnen 5 minuten geregeld.
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
                  href="https://wa.me/31620172767"
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

      {/* Why Choose Us Section */}
      <section className="section-gray">
        <div className="container-custom">
          <div>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-6">
                Uw Betrouwbare Taxi in Den Haag
              </h2>
              <p className="text-lead max-w-2xl mx-auto">
                Enjoy Taxi is uw partner voor betrouwbaar vervoer. Maximaal comfort, vaste prijzen, en 24/7 beschikbaar in Den Haag, Leiden en omgeving.
              </p>
            </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewList />

      {/* Airport Transfers Section */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi naar Schiphol .webp"
                  alt="Taxi naar Schiphol - Luchthaven Transfer"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  quality={85}
                />
                {/* Glossy badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-secondary-800">Vlucht Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary-200/50" />
            </div>

            {/* Right - Content & Pricing */}
            <div>
              <h2 className="heading-2 mb-4">
                Taxi naar de Luchthaven
              </h2>
              <p className="text-lead mb-8">
                Stressvrij naar Schiphol of Rotterdam Airport. Vaste prijzen, vlucht tracking en 30 minuten gratis wachttijd bij vertragingen.
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
                        <div className="text-2xl font-bold text-primary-600">€{item.price}<span className="text-sm">,-</span></div>
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

              <a
                href="tel:+31620172767"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Boek Nu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Payment Section - Modern Design */}
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

      {/* FAQ Section */}
      <section className="section-gray">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="heading-2 mb-4">Veelgestelde Vragen over Taxi Den Haag</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                question: 'Hoe boek ik een taxi in Den Haag of Leiden?',
                answer: 'U kunt bellen naar 06 2017 2767, WhatsAppen of het contactformulier invullen. Wij reageren binnen 15 minuten met een vaste prijs.',
              },
              {
                question: 'Wat kost een taxi van Den Haag naar Schiphol?',
                answer: 'Een taxi van Den Haag naar Schiphol kost €79 (vaste prijs). Geen verrassingen, ook niet bij files.',
              },
              {
                question: 'Is de taxi 24 uur per dag beschikbaar?',
                answer: 'Ja, onze taxi service is 24/7 beschikbaar. Ook voor vroege vluchten of late avondritten kunt u bij ons terecht.',
              },
              {
                question: 'Welke betaalmethoden accepteren jullie?',
                answer: 'Wij accepteren contant, PIN, creditcard en voor zakelijke klanten facturatie. Vooraf betalen via iDEAL is ook mogelijk.',
              },
              {
                question: 'Zijn er extra kosten voor bagage naar Schiphol?',
                answer: 'Nee, standaard bagage is inbegrepen bij onze Schiphol taxi service. Voor bijzondere wensen zoals ski\'s of fietsen, neem contact met ons op.',
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
                  name: 'Hoe boek ik een taxi in Den Haag of Leiden?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'U kunt bellen naar 06 2017 2767, WhatsAppen of het contactformulier invullen. Wij reageren binnen 15 minuten met een vaste prijs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wat kost een taxi van Den Haag naar Schiphol?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Een taxi van Den Haag naar Schiphol kost €79 (vaste prijs). Geen verrassingen, ook niet bij files.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is de taxi 24 uur per dag beschikbaar?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, onze taxi service is 24/7 beschikbaar. Ook voor vroege vluchten of late avondritten kunt u bij ons terecht.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welke betaalmethoden accepteren jullie?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wij accepteren contant, PIN, creditcard en voor zakelijke klanten facturatie. Vooraf betalen via iDEAL is ook mogelijk.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Zijn er extra kosten voor bagage naar Schiphol?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nee, standaard bagage is inbegrepen bij onze Schiphol taxi service. Voor bijzondere wensen zoals ski\'s of fietsen, neem contact met ons op.',
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Floating Mobile CTA - Hidden on hero and footer */}
      <FloatingCTA />
    </>
  )
}
