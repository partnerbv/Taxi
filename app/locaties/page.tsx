import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { locations } from '@/data/locations'
import ReviewList from '@/components/ReviewList'

export const metadata: Metadata = {
  title: 'Taxi Locaties | Den Haag, Leiden, Delft & Meer | Enjoy Taxi',
  description: 'Taxi service in heel Zuid-Holland. Den Haag, Leiden, Delft, Scheveningen, Zoetermeer en meer. 24/7 beschikbaar met vaste prijzen. Boek nu!',
  keywords: [
    'taxi den haag',
    'taxi leiden',
    'taxi delft',
    'taxi scheveningen',
    'taxi zoetermeer',
    'taxi wassenaar',
    'taxi zuid-holland',
  ],
  alternates: {
    canonical: 'https://enjoytaxi.nl/locaties',
  },
}

export default function LocatiesPage() {
  // Group locations by region
  const denHaagWijken = locations.filter(loc => loc.region === 'Den Haag')
  const denHaagOmgeving = locations.filter(loc => loc.region === 'Den Haag en Omgeving')
  const leidenRegion = locations.filter(loc => loc.region === 'Leiden e.o.')
  const airports = locations.filter(loc => loc.region === 'Luchthaven')

  const gradients = [
    'from-emerald-500 to-teal-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-amber-500',
    'from-emerald-500 to-teal-500',
    'from-rose-500 to-red-500',
    'from-indigo-500 to-violet-500',
  ]

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Enjoy Taxi',
            description: 'Betrouwbare taxi service in Zuid-Holland',
            areaServed: locations.map(loc => ({
              '@type': 'City',
              name: loc.name,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Taxi Service in <span className="text-primary-300">Zuid-Holland</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Betaalbare taxi service in Den Haag, Leiden, Delft en omgeving.
              24/7 beschikbaar met vaste prijzen.
            </p>

            {/* USP Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
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
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="tel:+31620172767"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Nu
              </a>
              <Link
                href="/schiphol"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Schiphol Transfers
              </Link>
            </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi Den haag.jpg"
                  alt="Taxi Den Haag - Betrouwbare Taxi Service"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary-500/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Airports Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-900 to-secondary-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Luchthaven Transfers
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Stressvrij naar de luchthaven met vaste prijzen en vlucht tracking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {airports.map((location, index) => (
              <Link
                key={location.slug}
                href={location.slug === 'schiphol' ? '/schiphol' : `/locations/${location.slug}`}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-white/50 text-sm mb-2">{location.region}</p>
                    <p className="text-primary-400 font-semibold">
                      Vanaf &euro;{location.popularRoutes[0]?.priceFrom || 79},-
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Den Haag Wijken */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Taxi in Den Haag Wijken
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Betaalbare taxi service in alle wijken van Den Haag - van Bezuidenhout tot Loosduinen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {denHaagWijken.map((location, index) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group p-6 bg-secondary-50 rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Den Haag Omgeving */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Taxi Den Haag & Omgeving
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Betaalbare taxi service in Scheveningen, Delft, Wassenaar, Rijswijk en meer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {denHaagOmgeving.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group p-6 bg-white rounded-xl border border-secondary-200 hover:border-emerald-300 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-emerald-600 transition-colors">
                  {location.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leiden Region */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Taxi Leiden & Omgeving
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Betrouwbare taxi service in Leiden, Oegstgeest, Voorschoten, Katwijk en Noordwijk
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {leidenRegion.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group p-6 bg-secondary-50 rounded-xl border border-secondary-200 hover:border-purple-300 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-purple-600 transition-colors">
                  {location.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{locations.length}</div>
              <div className="text-white/70">Locaties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Beschikbaar</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70">Betrouwbaar</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">Vast</div>
              <div className="text-white/70">Tarieven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewList />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-secondary-50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Uw Locatie Niet Gevonden?
            </h2>
            <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
              Wij rijden door heel Zuid-Holland en daarbuiten. Neem contact op voor een offerte op maat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+31620172767"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
              <a
                href="https://wa.me/31620172767"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
