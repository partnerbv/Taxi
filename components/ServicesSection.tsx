import Link from 'next/link'

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
    title: 'Zakelijk Vervoer',
    description: 'Professioneel vervoer voor zakelijke afspraken. WiFi aan boord.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services#zakelijk',
  },
  {
    title: 'Evenementen',
    description: 'Van bruiloften tot congressen. Meerdere voertuigen beschikbaar.',
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

export default function ServicesSection() {
  return (
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
  )
}
