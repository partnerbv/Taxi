const features = [
  {
    title: 'Comfortabele Voertuigen',
    description: 'Onze volledige vloot bestaat uit comfortabele voertuigen. Altijd op tijd.',
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

export default function WhyChooseUs() {
  return (
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
  )
}
