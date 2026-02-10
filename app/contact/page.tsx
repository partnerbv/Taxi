import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Taxi Den Haag | Bel 06 2017 2767 | Enjoy Taxi',
  description:
    'Contact Enjoy Taxi Den Haag. ✓ Bel 06 2017 2767 ✓ WhatsApp ✓ Direct boeken. Betrouwbare taxi service 24/7 beschikbaar in Den Haag en omgeving.',
  keywords: [
    'taxi den haag contact',
    'taxi bellen den haag',
    'taxi bestellen den haag',
    'enjoy taxi contact',
    'taxi boeken den haag',
  ],
  openGraph: {
    title: 'Contact Taxi Den Haag | Bel Direct | Enjoy Taxi',
    description:
      'Neem contact op met Enjoy Taxi. Bel 06 2017 2767 of WhatsApp voor directe boeking van uw taxi.',
    url: 'https://enjoytaxi.nl/contact',
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl/contact',
  },
}

const contactMethods = [
  {
    title: 'Bel Direct',
    description: 'Spreek direct met ons team',
    value: '06 2017 2767',
    href: 'tel:+31620172767',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    description: 'Snelle reactie via chat',
    value: 'Start Chat',
    href: 'https://wa.me/31620172767',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: 'E-mail',
    description: 'Voor offertes en vragen',
    value: 'info@enjoytaxi.nl',
    href: 'mailto:info@enjoytaxi.nl',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/enjoy taxi.webp"
            alt="Enjoy Taxi - Taxi Den Haag met Vaste Prijzen"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/90 to-primary-900/80" />
          {/* Color glow effects */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-400/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60L0 35C180 45 360 25 540 20C720 15 900 25 1080 32C1260 40 1350 45 1440 48L1440 60H0Z" fill="white" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Contact</span>
            </nav>

            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">24/7 Bereikbaar</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Neem Contact
              <span className="block text-primary-300">Met Ons Op</span>
            </h1>
            <p className="text-xl text-white/80">
              Heeft u vragen of wilt u een offerte aanvragen? Wij staan 24/7 voor
              u klaar via telefoon, WhatsApp of het contactformulier.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center space-x-4 p-6 bg-secondary-50 rounded-xl border border-secondary-200 hover:border-primary-300 transition-all hover:shadow-soft group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white group-hover:shadow-primary transition-shadow">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-secondary-500">{method.description}</p>
                  <p className="text-primary-600 font-medium">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="heading-3 mb-2">Offerte Aanvragen</h2>
              <p className="text-secondary-600 mb-8">
                Vul het formulier in en wij reageren binnen 24 uur met een
                vrijblijvende offerte.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:pl-8">
              <div className="sticky top-32">
                <h2 className="heading-3 mb-6">
                  Veelgestelde Vragen
                </h2>

                <div className="space-y-4 mb-12">
                  <details className="card group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-semibold text-secondary-900 pr-4">
                        Hoe snel kan ik een taxi krijgen?
                      </span>
                      <span className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-600 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-secondary-600">
                      Bij directe beschikbaarheid kunnen wij binnen 15-30 minuten
                      bij u zijn. Voor geplande ritten adviseren wij minimaal 24
                      uur vooruit te boeken.
                    </p>
                  </details>

                  <details className="card group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-semibold text-secondary-900 pr-4">
                        Wat zijn de betaalmogelijkheden?
                      </span>
                      <span className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-600 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-secondary-600">
                      Wij accepteren contant, PIN, creditcard en voor zakelijke
                      klanten ook op factuur. Vooraf betalen via iDEAL is ook
                      mogelijk.
                    </p>
                  </details>

                  <details className="card group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-semibold text-secondary-900 pr-4">
                        Kan ik annuleren?
                      </span>
                      <span className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-600 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-secondary-600">
                      Annuleren is kosteloos tot 2 uur voor de geplande
                      ophaaltijd. Bij latere annulering kunnen kosten in rekening
                      worden gebracht.
                    </p>
                  </details>
                </div>

                {/* Business Hours */}
                <div className="card">
                  <h3 className="font-semibold text-secondary-900 mb-4 flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Beschikbaarheid</span>
                  </h3>
                  <div className="space-y-2 text-secondary-600">
                    <div className="flex justify-between">
                      <span>Taxi Service</span>
                      <span className="text-accent-600 font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Telefoon Support</span>
                      <span>07:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp</span>
                      <span className="text-accent-600 font-medium">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Enjoy Taxi',
              telephone: '+31620172767',
              email: 'info@enjoytaxi.nl',
              url: 'https://enjoytaxi.nl/contact',
            },
          }),
        }}
      />
    </>
  )
}
