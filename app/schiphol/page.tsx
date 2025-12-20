import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Taxi Schiphol | Vaste Prijs vanaf €79 | 24/7 Service | Enjoy Taxi',
  description: 'Taxi naar Schiphol vanaf €79 vaste prijs. Flight tracking, 30 min gratis wachttijd, bagage inbegrepen. 24/7 beschikbaar vanuit Den Haag en Leiden. Boek nu!',
  keywords: [
    'taxi schiphol',
    'schiphol taxi',
    'taxi naar schiphol',
    'schiphol transfer',
    'luchthaven taxi',
    'taxi schiphol den haag',
    'taxi schiphol leiden',
    'schiphol taxi vaste prijs',
    'taxi amsterdam airport',
  ],
  alternates: {
    canonical: 'https://enjoytaxi.nl/schiphol',
  },
  openGraph: {
    title: 'Taxi Schiphol | Vaste Prijs vanaf €79 | Enjoy Taxi',
    description: 'Taxi naar Schiphol vanaf €79. Flight tracking, gratis wachttijd, 24/7 beschikbaar.',
    url: 'https://enjoytaxi.nl/schiphol',
  },
}

const pricing = [
  { location: 'Den Haag Centrum', price: 79, duration: '45 min' },
  { location: 'Scheveningen', price: 85, duration: '50 min' },
  { location: 'Leiden Centrum', price: 79, duration: '35 min' },
  { location: 'Delft', price: 69, duration: '40 min' },
  { location: 'Zoetermeer', price: 75, duration: '35 min' },
  { location: 'Wassenaar', price: 75, duration: '40 min' },
  { location: 'Voorburg', price: 75, duration: '40 min' },
  { location: 'Rijswijk', price: 75, duration: '40 min' },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '30 Min Gratis Wachttijd',
    description: 'Bij vertraging van uw vlucht wachten wij gratis tot 30 minuten.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Vaste Prijs Garantie',
    description: 'De prijs die u ziet is de prijs die u betaalt. Geen toeslagen bij files.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Flight Tracking',
    description: 'Wij volgen uw vlucht en passen de ophaaltijd automatisch aan.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Bagage Inbegrepen',
    description: 'Standaard bagage is altijd inbegrepen in de prijs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '100% Tesla',
    description: 'Reis comfortabel en duurzaam in onze Tesla Model S of X.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Beschikbaar',
    description: 'Ook voor vroege ochtendvluchten of late aankomsten.',
  },
]

const faqs = [
  {
    question: 'Hoe laat moet ik de taxi bestellen voor mijn vlucht?',
    answer: 'Wij adviseren om de taxi minimaal 3 uur voor uw vertrektijd te boeken. Voor internationale vluchten raden wij 3,5 uur aan. Wij houden rekening met mogelijke drukte op de weg.',
  },
  {
    question: 'Wat als mijn vlucht vertraging heeft?',
    answer: 'Geen probleem! Wij volgen uw vlucht via flight tracking. Bij vertraging passen wij de ophaaltijd automatisch aan. De eerste 30 minuten wachttijd zijn gratis.',
  },
  {
    question: 'Kan ik betalen met creditcard?',
    answer: 'Ja, wij accepteren contant, PIN, creditcard en voor zakelijke klanten facturatie. Vooraf betalen via iDEAL is ook mogelijk.',
  },
  {
    question: 'Hoeveel bagage mag ik meenemen?',
    answer: 'Standaard bagage (1 koffer + 1 handbagage per persoon) is inbegrepen. Voor extra bagage of bijzondere items zoals ski\'s, neem vooraf contact met ons op.',
  },
  {
    question: 'Kan ik een kinderzitje aanvragen?',
    answer: 'Ja, kinderzitjes zijn beschikbaar op aanvraag. Geef dit aan bij uw boeking zodat wij dit kunnen regelen.',
  },
  {
    question: 'Waar wordt ik opgehaald op Schiphol?',
    answer: 'Onze chauffeur staat klaar bij de afgesproken ontmoetingsplek, meestal bij de aankomsthal. U ontvangt vooraf een bericht met de exacte locatie en het telefoonnummer van de chauffeur.',
  },
]

export default function SchipholPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Taxi Schiphol - Enjoy Taxi',
            description: 'Premium taxi service naar Schiphol Airport vanuit Den Haag en Leiden. Vaste prijzen, flight tracking en 24/7 beschikbaar.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Enjoy Taxi',
              telephone: '+31620172767',
            },
            areaServed: [
              { '@type': 'City', name: 'Den Haag' },
              { '@type': 'City', name: 'Leiden' },
              { '@type': 'City', name: 'Delft' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Schiphol Transfer Tarieven',
              itemListElement: pricing.map((item) => ({
                '@type': 'Offer',
                name: `Taxi ${item.location} - Schiphol`,
                price: item.price,
                priceCurrency: 'EUR',
              })),
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
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
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Luchthaven Transfer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Taxi naar <span className="text-primary-300">Schiphol</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Comfortabel en stressvrij naar Schiphol Airport. Vaste prijzen vanaf €79,
                flight tracking en 30 minuten gratis wachttijd bij vertraging.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vaste prijs
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flight tracking
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 service
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+31620172767"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Boek Nu
                </a>
                <a
                  href="https://wa.me/31620172767?text=Hallo,%20ik%20wil%20graag%20een%20taxi%20naar%20Schiphol%20boeken"
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

            {/* Price Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Schiphol Transfer</span>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-lg text-secondary-500">vanaf</span>
                    <span className="text-6xl font-bold text-secondary-900 mx-2">€79</span>
                  </div>
                  <p className="text-secondary-500 mt-2">vaste prijs, geen verrassingen</p>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    'Vaste prijs, ook bij files',
                    '30 min gratis wachttijd',
                    'Flight tracking inbegrepen',
                    'Bagage inbegrepen',
                    'Luxe Tesla voertuig',
                    '24/7 beschikbaar',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+31620172767"
                  className="block w-full py-4 bg-primary-600 text-white text-center font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Boek Nu: 06 2017 2767
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Tarieven
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Vaste Prijzen naar Schiphol
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Transparante tarieven zonder verrassingen. De prijs die u ziet is de prijs die u betaalt.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary-100 font-semibold text-secondary-700">
                <div>Vertrekpunt</div>
                <div className="text-center">Reistijd</div>
                <div className="text-right">Prijs</div>
              </div>
              {pricing.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-4 items-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'
                  }`}
                >
                  <div className="font-medium text-secondary-900">{item.location}</div>
                  <div className="text-center text-secondary-600">~{item.duration}</div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary-600">€{item.price}</span>
                    <span className="text-secondary-500 text-sm">,-</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-secondary-500 mt-6 text-sm">
              * Prijzen zijn inclusief bagage en 30 minuten wachttijd. Uw locatie niet in de lijst? Neem contact op voor een offerte.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi.jpg"
                  alt="Premium Taxi Service - Chauffeur met klant"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary-200/50 -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                Waarom Enjoy Taxi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Onze Schiphol Service
              </h2>
              <p className="text-secondary-600 mb-8">
                Alles voor een zorgeloze reis naar de luchthaven. Professionele chauffeurs, luxe Tesla voertuigen en persoonlijke service.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">{feature.title}</h3>
                      <p className="text-secondary-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(4).map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-secondary-200 hover:shadow-lg hover:border-primary-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hoe Het Werkt
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              In 4 eenvoudige stappen naar Schiphol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Boek Uw Rit', description: 'Bel, WhatsApp of vul het formulier in met uw vluchtgegevens.' },
              { step: '2', title: 'Bevestiging', description: 'U ontvangt binnen 15 minuten een bevestiging met vaste prijs.' },
              { step: '3', title: 'Chauffeur Klaar', description: 'Uw chauffeur staat op tijd klaar op de afgesproken locatie.' },
              { step: '4', title: 'Ontspannen Reis', description: 'Geniet van de comfortabele rit in onze Tesla naar Schiphol.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Veelgestelde Vragen
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-secondary-50 rounded-xl border border-secondary-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center group-open:bg-primary-100 transition-colors">
                      <svg
                        className="w-4 h-4 text-secondary-500 group-open:text-primary-600 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om te Boeken?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Boek nu uw taxi naar Schiphol en reis comfortabel in een Tesla.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+31620172767"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel: 06 2017 2767
            </a>
            <a
              href="https://wa.me/31620172767?text=Hallo,%20ik%20wil%20graag%20een%20taxi%20naar%20Schiphol%20boeken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Contact Formulier
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
