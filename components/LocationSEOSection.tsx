import Link from 'next/link'
import type { Location } from '@/data/locations'

interface LocationSEOSectionProps {
  location: Location
}

export default function LocationSEOSection({ location }: LocationSEOSectionProps) {
  return (
    <section className="section-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            <h2 className="heading-2 mb-6">
              Taxi {location.name} - Vaste Prijzen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-600 mb-4">
                {location.description}
              </p>
              <p className="text-secondary-600 mb-6">
                Met onze 100% betrouwbare service bieden wij professionele taxiservice
                in {location.name} en omgeving. Of u nu naar{' '}
                {location.nearbyAirport || 'de luchthaven'} moet, een zakelijke afspraak
                heeft, of gewoon comfortabel wilt reizen - Enjoy Taxi staat voor u klaar.
              </p>
            </div>

            {/* Local Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Snelle Ophaaltijd</h3>
                  <p className="text-sm text-secondary-500">Binnen 15 minuten bij u</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Vaste Prijzen</h3>
                  <p className="text-sm text-secondary-500">Geen verrassingen achteraf</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Vaste Prijzen</h3>
                  <p className="text-sm text-secondary-500">Duurzaam & stil rijden</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Betrouwbare Service</h3>
                  <p className="text-sm text-secondary-500">Comfortabele voertuigen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="bg-white rounded-2xl p-8 border border-secondary-200 shadow-soft">
            <h3 className="heading-3 mb-6">
              Populaire Routes vanuit {location.name}
            </h3>
            <ul className="space-y-4">
              {location.popularRoutes.map((route, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-4 bg-secondary-50 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-secondary-700">{route.destination}</span>
                  </div>
                  <span className="text-primary-600 font-semibold">
                    vanaf &euro;{route.priceFrom}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary w-full text-center">
                Vraag Vrijblijvend Offerte Aan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
