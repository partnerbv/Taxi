import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations'
import FloatingCTA from '@/components/FloatingCTA'

interface LocationPageProps {
  params: Promise<{
    slug: string
  }>
}

// Airport pricing data
const airportPrices = [
  { airport: 'Schiphol Airport', code: 'AMS', price: 79, duration: '45 min', icon: '✈️' },
  { airport: 'Rotterdam Airport', code: 'RTM', price: 55, duration: '25 min', icon: '🛫' },
  { airport: 'Eindhoven Airport', code: 'EIN', price: 149, duration: '90 min', icon: '🛩️' },
]

// Testimonials
const testimonials = [
  {
    name: 'Mark de Vries',
    role: 'Zakelijke klant',
    text: 'Fantastische service! Altijd op tijd, professionele chauffeurs en de auto is heerlijk comfortabel.',
    rating: 5,
  },
  {
    name: 'Sophie Jansen',
    role: 'Vaste klant',
    text: 'Gebruik Enjoy Taxi al maanden voor al mijn ritten. Betrouwbaar, goede prijs en altijd vriendelijke chauffeurs.',
    rating: 5,
  },
]

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return { title: 'Locatie niet gevonden' }
  }

  const keywords = [
    `taxi ${location.name.toLowerCase()}`,
    `taxi ${location.name.toLowerCase()} bestellen`,
    `${location.name.toLowerCase()} taxi`,
    `taxi service ${location.name.toLowerCase()}`,
    `taxi ${location.name.toLowerCase()} den haag`,
    `taxi ${location.name.toLowerCase()} leiden`,
    `${location.name.toLowerCase()} taxicentrale`,
    `taxi ${location.name.toLowerCase()} 24 uur`,
    `taxi reserveren ${location.name.toLowerCase()}`,
    `taxi bellen ${location.name.toLowerCase()}`,
    'premium taxi', 'taxi vaste prijs', '24/7 taxi', 'vaste prijs taxi',
    'zakelijk vervoer', 'luchthaven taxi', 'taxi zuid-holland',
  ]

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://enjoytaxi.nl/locations/${location.slug}`,
      type: 'website',
      locale: 'nl_NL',
      images: [{ url: 'https://enjoytaxi.nl/enjoy taxi.webp', width: 1200, height: 630, alt: `Taxi ${location.name}` }],
    },
    twitter: { card: 'summary_large_image', title: location.metaTitle, description: location.metaDescription },
    alternates: { canonical: `https://enjoytaxi.nl/locations/${location.slug}` },
    other: { 'geo.region': 'NL-ZH', 'geo.placename': location.name },
  }
}

// Dynamic FAQs based on location
function getLocationFaqs(locationName: string) {
  return [
    {
      question: `Hoe bestel ik een taxi in ${locationName}?`,
      answer: `U kunt een taxi in ${locationName} bestellen door te bellen naar 06 2017 2767 of via WhatsApp. Wij reageren binnen 5 minuten met een vaste prijs.`,
    },
    {
      question: `Hoe snel kan er een taxi in ${locationName} zijn?`,
      answer: `In ${locationName} kunnen wij meestal binnen 15-20 minuten een taxi bij u hebben. Voor geplande ritten raden wij reserveren aan.`,
    },
    {
      question: `Wat zijn de tarieven voor een taxi in ${locationName}?`,
      answer: `Wij werken met vaste prijzen die u vooraf ontvangt. Geen verrassingen, ook niet bij files. Bel of WhatsApp ons voor een directe prijsopgave voor uw rit.`,
    },
    {
      question: `Kan ik in ${locationName} ook zakelijk boeken?`,
      answer: `Ja, wij bieden zakelijke accounts met maandelijkse facturatie, BTW-specificatie en korting bij regelmatig gebruik.`,
    },
    {
      question: `Rijden jullie vanaf ${locationName} naar de luchthaven?`,
      answer: `Ja, wij verzorgen dagelijks luchthaven transfers naar Schiphol, Rotterdam Airport en Eindhoven Airport. Inclusief flight tracking en gratis wachttijd.`,
    },
    {
      question: 'Welke betaalmethoden accepteren jullie?',
      answer: 'Wij accepteren PIN, contant, creditcard en facturatie voor zakelijke klanten. Vooraf betalen via iDEAL is ook mogelijk.',
    },
  ]
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 8)
  const sameRegionLocations = locations.filter(
    (l) => l.region === location.region && l.slug !== location.slug
  ).slice(0, 4)

  const locationFaqs = getLocationFaqs(location.name)

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TaxiService',
            name: `Enjoy Taxi ${location.name}`,
            description: location.description,
            url: `https://enjoytaxi.nl/locations/${location.slug}`,
            telephone: '+31620172767',
            priceRange: '€€',
          }),
        }}
      />

      {/* HERO SECTION - Modern Design */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/enjoy taxi.webp"
            alt={`Taxi ${location.name}`}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/95 via-secondary-900/85 to-primary-900/75" />
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-primary-300">{location.name}</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
                </span>
                <span className="text-sm font-medium text-white/90">Nu beschikbaar in {location.region}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Taxi {location.name} <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-primary-300 via-primary-400 to-emerald-400 bg-clip-text text-transparent">Bestellen</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-xl">
                {location.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:+31620172767"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-900 font-bold rounded-2xl transition-all duration-300 hover:bg-primary-50 hover:scale-105 shadow-2xl shadow-white/20"
                >
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel Direct
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/31620172767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* USP Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-white">Vaste Prijzen</span>
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
                  <span className="text-sm font-medium text-white">Vaste Tarieven</span>
                </div>
              </div>
            </div>

            {/* Right - Service Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-emerald-500/30 rounded-3xl blur-2xl" />

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Taxi {location.name} Bellen</h3>
                    <span className="text-primary-300 text-sm">24/7 Premium Taxi Service</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {['Vaste prijs, geen verrassingen', 'Binnen 15 min ophalen mogelijk', '100% betrouwbare service', 'Professionele chauffeurs'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:+31620172767"
                    className="block w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl text-center transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:shadow-primary-500/30"
                  >
                    Bel Nu - 06 2017 2767
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 80L0 50C240 70 480 30 720 25C960 20 1200 40 1440 55L1440 80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION - Modern Layout */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Over Taxi {location.name}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Taxi {location.name}<br />
                <span className="text-primary-600">24/7 Beschikbaar</span>
              </h2>

              <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                {location.longDescription}
              </p>

              <p className="text-secondary-600 leading-relaxed mb-10">
                Bij Enjoy Taxi staat kwaliteit voorop. Onze chauffeurs zijn professioneel, vriendelijk en kennen {location.name} en omgeving op hun duimpje. Of u nu een taxi nodig heeft voor een zakelijke afspraak, een vlucht vanaf Schiphol, of een avondje uit - wij zorgen ervoor dat u op tijd en in stijl aankomt.
              </p>

              {/* Highlights */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">
                  Taxi ophalen in {location.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-secondary-100 to-secondary-50 text-secondary-700 rounded-full text-sm font-medium border border-secondary-200 hover:border-primary-300 hover:text-primary-700 transition-colors cursor-default"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Diensten overzicht */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/Taxi-Den-Haag.webp"
                  alt={`Taxi service ${location.name}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Taxi Service {location.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Zakelijk Vervoer', 'Luchthaven Transfers', 'Privé Ritten', 'Evenementen'].map((dienst, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        {dienst}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 2 columns */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Taxi {location.name} Boeken</h3>

                  <div className="space-y-4 mb-8">
                    {[
                      { step: '1', text: 'Bel of WhatsApp ons' },
                      { step: '2', text: 'Geef uw ophaaladres door' },
                      { step: '3', text: 'Ontvang direct een vaste prijs' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <span className="text-white/90">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <a href="tel:+31620172767" className="flex items-center justify-center gap-3 w-full py-4 bg-white text-secondary-900 font-bold rounded-xl transition-all hover:bg-primary-50 hover:scale-[1.02]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      06 2017 2767
                    </a>
                    <a
                      href="https://wa.me/31620172767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white font-bold rounded-xl transition-all hover:bg-green-600 hover:scale-[1.02]"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-secondary-600 italic mb-4">
                    &ldquo;{testimonials[0].text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center font-bold text-primary-700">
                      {testimonials[0].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">{testimonials[0].name}</div>
                      <div className="text-sm text-secondary-500">{testimonials[0].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIRPORT TRANSFERS - Modern Design */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi naar Schiphol .webp"
                  alt={`Taxi ${location.name} naar Schiphol`}
                  width={650}
                  height={500}
                  className="w-full h-auto object-cover"
                  quality={90}
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
                      <span className="text-xs font-semibold text-secondary-800">Flight Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary-200 to-primary-100" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Luchthaven Transfers
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Taxi {location.name}<br />
                <span className="text-primary-600">naar Schiphol</span>
              </h2>

              <p className="text-xl text-secondary-600 mb-10">
                Stressvrij naar Schiphol, Rotterdam of Eindhoven Airport. Vaste prijzen, flight tracking en 30 minuten gratis wachttijd.
              </p>

              {/* Airport Price Cards */}
              <div className="space-y-4 mb-10">
                {airportPrices.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-secondary-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-100 to-secondary-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-secondary-900 text-lg">{item.airport}</div>
                        <div className="flex items-center gap-2 text-secondary-500 text-sm">
                          <span className="px-2 py-0.5 bg-secondary-100 rounded-md font-mono">{item.code}</span>
                          <span>•</span>
                          <span>~{item.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondary-400">vanaf</div>
                      <div className="text-3xl font-bold text-primary-600">€{item.price}<span className="text-lg">,-</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 mb-8">
                {['Vaste prijs', 'Bagage inbegrepen', '30 min wachttijd'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-secondary-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:+31620172767"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Boek Nu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Modern Accordion */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
              Veelgestelde Vragen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Taxi {location.name} Veelgestelde Vragen
            </h2>
            <p className="text-xl text-secondary-600">
              Alles over taxi bestellen in {location.name}
            </p>
          </div>

          <div className="space-y-4">
            {locationFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-secondary-900 pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center group-open:bg-primary-600 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-secondary-500 group-open:text-white transition-all duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER LOCATIONS - Modern Design */}
      {sameRegionLocations.length > 0 && (
        <section className="relative py-20 bg-gradient-to-b from-white via-secondary-50/50 to-white overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl translate-x-1/2" />

          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 mb-6">
                <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">{location.region}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Taxi Service <span className="text-primary-600">{location.region}</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-xl mx-auto">
                Ook taxi bestellen in deze plaatsen met vaste prijzen
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sameRegionLocations.map((loc, index) => {
                const gradients = [
                  'from-emerald-500 to-teal-500',
                  'from-purple-500 to-pink-500',
                  'from-orange-500 to-amber-500',
                  'from-teal-500 to-emerald-500',
                ]
                return (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="group relative bg-white rounded-2xl p-6 border border-secondary-200 hover:border-primary-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 4]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index % 4]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-secondary-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">
                        {loc.name}
                      </h3>
                      <p className="text-sm text-secondary-500">Taxi Service</p>

                      {/* Arrow */}
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="inline-flex items-center text-xs font-semibold text-primary-600">
                          Bekijk tarieven
                          <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ALL LOCATIONS - Modern Dark Design */}
      <section className="relative py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Taxi Regio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Taxi Bestellen <span className="text-primary-300">{location.name}</span>
            </h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto">
              Ook taxi service in deze locaties met vaste prijzen
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherLocations.map((loc, index) => {
              const gradients = [
                'from-emerald-500 to-teal-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-amber-500',
                'from-teal-500 to-emerald-500',
                'from-rose-500 to-red-500',
                'from-indigo-500 to-violet-500',
                'from-yellow-500 to-orange-500',
                'from-teal-500 to-emerald-500',
              ]
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 8]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % 8]} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-base mb-0.5 group-hover:text-primary-300 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-white/50">{loc.region}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <span className="text-white/70">Uw locatie niet gevonden?</span>
              <a
                href="tel:+31620172767"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-secondary-900 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mobile CTA - Hidden on hero and footer */}
      <FloatingCTA />
    </>
  )
}
