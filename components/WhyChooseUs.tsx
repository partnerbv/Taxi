import Image from 'next/image'

const usps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Betrouwbaar & Veilig',
    description: 'Professionele, ervaren chauffeurs met alle vereiste vergunningen en verzekeringen.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Schone, Nette Voertuigen',
    description: 'Onze Mercedes-vloot wordt goed onderhouden en schoongemaakt. Altijd een comfortabele rit.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Vaste, Eerlijke Tarieven',
    description: 'Geen verrassingen. De prijs die u hoort is de prijs die u betaalt. Inclusief BTW.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Beschikbaar',
    description: 'Dag en nacht bereikbaar. Boek telefonisch of via WhatsApp, wanneer u maar wilt.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Lokale Expertise',
    description: 'Onze chauffeurs kennen Den Haag, Leiden en omgeving als hun broekzak.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Vlucht Monitoring',
    description: 'Wij volgen uw vlucht en passen de ophaaltijd automatisch aan bij vertragingen.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 right-0 w-[34rem] h-[34rem] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — intro + foto */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-5">
              <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-primary-700 text-sm font-semibold">Waarom Enjoy Taxi</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-accent-900 leading-tight mb-5">
              Waarom klanten <span className="text-gradient-blue">ons kiezen</span>
            </h2>
            <p className="text-lg text-accent-600 leading-relaxed mb-8">
              Enjoy Taxi is de betrouwbare taxiservice van Den Haag en Leiden. Onze klanten
              waarderen onze punctualiteit, eerlijke prijzen en vriendelijke chauffeurs.
            </p>

            {/* Owner image with frame */}
            <div className="relative max-w-sm">
              <div className="absolute -inset-3 bg-primary-500/10 rounded-3xl blur-xl" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg border border-accent-100">
                <Image
                  src="/eigenaar.webp"
                  alt="De eigenaar van Enjoy Taxi"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-accent-900 leading-tight">Eigenaar Enjoy Taxi</p>
                    <p className="text-xs text-accent-500">Persoonlijke service, elke rit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — feature lijst */}
          <div className="lg:col-span-7">
            <ol className="divide-y divide-accent-100">
              {usps.map((usp, i) => (
                <li
                  key={usp.title}
                  className="group flex items-start gap-5 py-6 -mx-4 px-4 rounded-2xl hover:bg-accent-50 transition-colors"
                >
                  {/* Number */}
                  <span className="hidden sm:block text-3xl font-bold text-accent-200 tabular-nums leading-none pt-1 w-10 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {usp.icon}
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-accent-900 mb-1">{usp.title}</h3>
                    <p className="text-accent-600 leading-relaxed">{usp.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '24/7', label: 'Bereikbaar' },
                { value: '€79', label: 'Schiphol vanaf' },
                { value: '5.0', label: 'Klantbeoordeling' },
              ].map((s) => (
                <div key={s.label} className="text-center rounded-2xl bg-accent-50 border border-accent-100 py-5">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">{s.value}</div>
                  <div className="text-sm text-accent-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
