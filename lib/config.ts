/**
 * CENTRALE CONFIGURATIE - Enjoy Taxi
 *
 * Deze waarden worden door de hele website gebruikt.
 */

export const businessConfig = {
  // === CONTACTGEGEVENS ===
  phone: {
    display: '06 2017 2767',
    href: '+31620172767',
  },
  whatsapp: {
    number: '31620172767',
    message: 'Hallo, ik wil graag een taxi boeken.',
  },
  email: 'info@enjoytaxi.nl',

  // === BEDRIJFSGEGEVENS (VOOR TRUST & SEO) ===
  business: {
    name: 'Enjoy Taxi',
    legalName: 'Enjoy Taxi',
    kvk: '27293969',
    btw: 'NL002455187B87',
    address: {
      street: 'Den Haag',
      city: 'Den Haag',
      postalCode: '',
      country: 'Nederland',
    },
  },

  // === TARIEVEN ===
  pricing: {
    schipholVanaf: 79,
    rotterdamAirport: 55,
    eindhovenAirport: 149,
    // Lokale staffel (vaste prijzen)
    local: [
      { distance: '1 tot 4 kilometer', label: 'Korte ritten in de buurt', price: '€14,50', km: '1-4' },
      { distance: '4 tot 7 kilometer', label: 'Middellange afstanden', price: '€24,50', km: '4-7' },
      { distance: '7 tot 10 kilometer', label: 'Langere ritten in de regio', price: '€34,50', km: '7-10' },
      { distance: 'Meer dan 10 kilometer', label: 'Per extra kilometer', price: '€1,75', km: '10+' },
    ],
  },

  // === SERVICE GARANTIES ===
  guarantees: {
    waitTime: 15,
    freeWaitAirport: 30,
    flightMonitoring: true,
    nachtToeslag: false,
    bagageToeslag: false,
    annulerenGratis: true,
  },

  // === OPERATING HOURS ===
  hours: {
    open24_7: true,
    description: '24 uur per dag, 7 dagen per week',
  },
}

// Helper functies
export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || businessConfig.whatsapp.message)
  return `https://wa.me/${businessConfig.whatsapp.number}?text=${message}`
}

export function getPhoneUrl(): string {
  return `tel:${businessConfig.phone.href}`
}
