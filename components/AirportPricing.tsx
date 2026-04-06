import Image from 'next/image'

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

export default function AirportPricing() {
  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/taxi-naar-schiphol.webp"
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
  )
}
