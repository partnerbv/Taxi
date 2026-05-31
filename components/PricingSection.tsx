import Image from 'next/image'
import { businessConfig } from '@/lib/config'

export default function PricingSection() {
  const local = businessConfig.pricing.local

  return (
    <section id="tarieven" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury px-4 md:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-primary-700 text-sm font-semibold">Vaste Tarieven</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-900 mb-4">
            Taxi Tarieven — <span className="text-gradient-blue">Vaste Prijzen</span>
          </h2>
          <p className="text-accent-600 max-w-2xl mx-auto">
            Transparante prijzen, vooraf bekend. Geen nacht- of bagagetoeslagen.
          </p>
        </div>

        {/* Distance-based Pricing Table */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-accent-100 overflow-hidden">
            <div className="bg-primary-600 text-white px-6 py-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Lokale Tarieven Den Haag &amp; Omgeving
              </h3>
            </div>
            <div className="divide-y divide-accent-100">
              {local.map((row, i) => {
                const isLast = i === local.length - 1
                return (
                  <div
                    key={row.km}
                    className={`flex items-center justify-between px-4 md:px-6 py-4 transition-colors ${isLast ? 'bg-accent-50' : 'hover:bg-accent-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isLast ? 'bg-primary-600' : 'bg-primary-100'}`}>
                        <span className={`font-bold text-sm ${isLast ? 'text-white' : 'text-primary-700'}`}>{row.km}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-accent-900">{row.distance}</p>
                        <p className="text-base text-accent-500 hidden sm:block">{row.label}</p>
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-primary-600">
                      {row.price}
                      {isLast && <span className="text-sm font-normal text-accent-500">/km</span>}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Airport Pricing Section with Photo */}
        <div className="max-w-5xl mx-auto mb-10">
          <h3 className="text-xl font-bold text-accent-900 text-center mb-6">Luchthaven Tarieven</h3>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 lg:h-auto lg:min-h-[400px]">
              <Image
                src="/taxi-binnenhof.webp"
                alt="Enjoy Taxi Mercedes EQS bij het Binnenhof in Den Haag"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col gap-4">
              {/* Schiphol */}
              <div className="bg-accent-900 rounded-xl p-5 flex items-center justify-between hover:bg-accent-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Schiphol Airport</p>
                    <p className="text-primary-300 text-sm">Meest geboekt</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-primary-300">vanaf</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">€{businessConfig.pricing.schipholVanaf}</p>
                </div>
              </div>

              {/* Rotterdam */}
              <div className="bg-white rounded-xl p-5 flex items-center justify-between border-2 border-accent-100 hover:border-primary-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-accent-900 text-lg">Rotterdam Airport</p>
                    <p className="text-accent-500 text-sm">The Hague Airport</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-accent-500">vanaf</p>
                  <p className="text-2xl md:text-3xl font-bold text-primary-600">€{businessConfig.pricing.rotterdamAirport}</p>
                </div>
              </div>

              {/* Eindhoven */}
              <div className="bg-white rounded-xl p-5 flex items-center justify-between border-2 border-accent-100 hover:border-primary-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-accent-900 text-lg">Eindhoven Airport</p>
                    <p className="text-accent-500 text-sm">Vaste prijs</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-accent-500">vanaf</p>
                  <p className="text-2xl md:text-3xl font-bold text-primary-600">€{businessConfig.pricing.eindhovenAirport}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-accent-600">
          {['Geen nachttoeslag', 'Geen bagagetoeslag', 'Inclusief BTW'].map((f) => (
            <span key={f} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {f}
            </span>
          ))}
        </div>

        <p className="text-center text-xs text-accent-500 mt-6">
          * Exacte ritprijs hangt af van uw route. Bel of WhatsApp voor een directe prijsopgave.
        </p>
      </div>
    </section>
  )
}
