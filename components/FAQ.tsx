const faqs = [
  {
    question: 'Hoe boek ik een taxi in Den Haag of Leiden?',
    answer: 'U kunt bellen naar 06 2017 2767, WhatsAppen of het contactformulier invullen. Wij reageren binnen 15 minuten met een vaste prijs.',
  },
  {
    question: 'Wat kost een taxi van Den Haag naar Schiphol?',
    answer: 'Een taxi van Den Haag naar Schiphol kost €79 (vaste prijs). Geen verrassingen, ook niet bij files.',
  },
  {
    question: 'Is de taxi 24 uur per dag beschikbaar?',
    answer: 'Ja, onze taxi service is 24/7 beschikbaar. Ook voor vroege vluchten of late avondritten kunt u bij ons terecht.',
  },
  {
    question: 'Welke betaalmethoden accepteren jullie?',
    answer: 'Wij accepteren contant, PIN, creditcard en voor zakelijke klanten facturatie. Vooraf betalen via iDEAL is ook mogelijk.',
  },
  {
    question: 'Zijn er extra kosten voor bagage naar Schiphol?',
    answer: 'Nee, standaard bagage is inbegrepen bij onze Schiphol taxi service. Voor bijzondere wensen zoals ski\'s of fietsen, neem contact met ons op.',
  },
]

export default function FAQ() {
  return (
    <section className="section-gray">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="heading-2 mb-4">Veelgestelde Vragen over Taxi Den Haag</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-secondary-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-semibold text-secondary-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center group-open:bg-primary-100 transition-colors">
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

      {/* FAQ Structured Data */}
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
    </section>
  )
}
