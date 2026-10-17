import Image from 'next/image'
import { businessConfig, getWhatsAppUrl, getPhoneUrl } from '@/lib/config'

const benefits = [
  {
    text: 'Vaste prijzen',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'Professionele chauffeurs',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    text: '24/7 bereikbaar',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative bg-accent-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 container-luxury px-4 md:px-8 pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-28 lg:pb-32">
        <div className="grid md:grid-cols-[1fr_0.8fr] lg:grid-cols-[1fr_auto] gap-10 md:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center md:text-left animate-slide-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 lg:mb-6 tracking-tight">
              Taxi Den Haag
              <br />
              <span className="text-gradient-blue">24/7 Beschikbaar</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-200 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
              <strong className="text-white">Taxi nodig</strong> in Den Haag of omgeving? Boek
              snel uw rit met <strong className="text-white">vaste tarieven</strong> en professionele chauffeurs.
            </p>

            {/* USP Pills */}
            <ul className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-8">
              {benefits.map((b) => (
                <li
                  key={b.text}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm pl-2 pr-4 py-2 text-sm font-medium text-white"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/90 text-white flex-shrink-0">
                    {b.icon}
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>

            {/* Desktop CTAs */}
            <div className="hidden md:flex flex-wrap gap-3 justify-start">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-lg text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Nu
              </a>
              <a
                href={getPhoneUrl()}
                className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel {businessConfig.phone.display}
              </a>
            </div>

            {/* Mobile CTAs */}
            <div className="md:hidden mt-6 flex flex-col gap-3">
              <a href={getPhoneUrl()} className="btn-primary w-full justify-center text-lg group">
                <svg className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel {businessConfig.phone.display}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-4 bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-green-700"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Bericht
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none lg:w-[400px] xl:w-[440px] animate-slide-up">
            {/* Accent frame behind the photo */}
            <div
              className="absolute -inset-3 md:-inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/40 via-primary-600/10 to-transparent blur-sm"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/15">
              <Image
                src="/taxi-vredespaleis.webp"
                alt="Enjoy Taxi - Mercedes EQS taxi bij het Vredespaleis in Den Haag, 24/7 beschikbaar"
                fill
                priority
                className="object-cover object-[center_65%] md:object-center"
                sizes="(min-width: 1280px) 440px, (min-width: 1024px) 400px, (min-width: 768px) 40vw, 100vw"
              />
            </div>

            {/* Floating price badge */}
            <div className="absolute -bottom-5 left-4 md:-left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500 text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </span>
              <span className="leading-tight text-left">
                <span className="block text-xs font-medium text-accent-500">Schiphol vanaf</span>
                <span className="block text-lg font-bold text-accent-900">€79 all-in</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg className="w-full h-16 md:h-24 lg:h-28" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-primary-600/20"
          />
          <path
            d="M0 120L60 108C120 96 240 72 360 60C480 48 600 48 720 54C840 60 960 72 1080 78C1200 84 1320 84 1380 84L1440 84V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-accent-50"
          />
        </svg>
      </div>
    </section>
  )
}
