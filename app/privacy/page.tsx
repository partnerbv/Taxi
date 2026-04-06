import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | Enjoy Taxi Den Haag',
  description:
    'Lees het privacybeleid van Enjoy Taxi. Wij beschermen uw persoonsgegevens conform de AVG. Transparantie en veiligheid staan bij ons voorop.',
  alternates: {
    canonical: 'https://enjoytaxi.nl/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Wij hechten veel waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid leest u hoe wij omgaan met uw gegevens."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-secondary">
            {/* Introductie */}
            <h2 className="heading-2 mb-4">Introductie</h2>
            <p className="text-secondary-600 mb-6">
              Enjoy Taxi, gevestigd te Den Haag en ingeschreven bij de Kamer van
              Koophandel onder nummer 27293969, is verantwoordelijk voor de
              verwerking van persoonsgegevens zoals weergegeven in dit
              privacybeleid. Wij respecteren de privacy van alle gebruikers van
              onze website en onze diensten en dragen er zorg voor dat de
              persoonlijke informatie die u ons verschaft vertrouwelijk wordt
              behandeld.
            </p>

            {/* Welke gegevens verzamelen wij */}
            <h2 className="heading-2 mb-4">Welke gegevens verzamelen wij</h2>
            <p className="text-secondary-600 mb-4">
              Wij verzamelen de volgende persoonsgegevens wanneer u gebruik maakt
              van onze diensten:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>Voor- en achternaam</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Ophaal- en bestemmingsadres</li>
              <li>Datum en tijdstip van de rit</li>
              <li>Betalingsgegevens</li>
              <li>IP-adres en browsergegevens (via cookies)</li>
            </ul>

            {/* Waarvoor gebruiken wij uw gegevens */}
            <h2 className="heading-2 mb-4">
              Waarvoor gebruiken wij uw gegevens
            </h2>
            <p className="text-secondary-600 mb-4">
              Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>Het uitvoeren van uw taxireservering en het verlenen van onze diensten</li>
              <li>Het afhandelen van uw betaling</li>
              <li>Contact met u opnemen over uw reservering of rit</li>
              <li>Het verbeteren van onze dienstverlening</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
              <li>Het verzenden van informatie over onze diensten (alleen met uw toestemming)</li>
            </ul>

            {/* Cookies */}
            <h2 className="heading-2 mb-4">Cookies</h2>
            <p className="text-secondary-600 mb-4">
              Onze website maakt gebruik van cookies. Cookies zijn kleine
              tekstbestanden die op uw apparaat worden geplaatst wanneer u onze
              website bezoekt. Wij gebruiken de volgende soorten cookies:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                <strong>Functionele cookies:</strong> noodzakelijk voor het goed
                functioneren van de website
              </li>
              <li>
                <strong>Analytische cookies:</strong> om het gebruik van de
                website te analyseren en te verbeteren
              </li>
            </ul>
            <p className="text-secondary-600 mb-6">
              U kunt cookies uitschakelen via uw browserinstellingen. Houd er
              rekening mee dat het uitschakelen van cookies de werking van de
              website kan beperken.
            </p>

            {/* Google Analytics */}
            <h2 className="heading-2 mb-4">Google Analytics</h2>
            <p className="text-secondary-600 mb-6">
              Wij maken gebruik van Google Analytics om bij te houden hoe
              bezoekers onze website gebruiken. Google Analytics plaatst een
              cookie op uw apparaat waarmee uw gebruik van de website wordt
              geregistreerd. Deze informatie wordt overgebracht naar en opgeslagen
              op servers van Google in de Verenigde Staten. Wij hebben een
              verwerkersovereenkomst met Google gesloten en hebben het delen van
              gegevens met Google uitgeschakeld. IP-adressen worden
              geanonimiseerd.
            </p>

            {/* Bewaartermijn */}
            <h2 className="heading-2 mb-4">Bewaartermijn</h2>
            <p className="text-secondary-600 mb-6">
              Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk
              is voor de doeleinden waarvoor uw gegevens worden verzameld.
              Ritgegevens worden bewaard gedurende de wettelijk verplichte
              bewaartermijn van 7 jaar voor de belastingadministratie.
              Contactgegevens worden verwijderd wanneer u geen gebruik meer maakt
              van onze diensten en er geen wettelijke verplichting meer bestaat om
              de gegevens te bewaren.
            </p>

            {/* Uw rechten */}
            <h2 className="heading-2 mb-4">Uw rechten</h2>
            <p className="text-secondary-600 mb-4">
              Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft
              u de volgende rechten:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>Recht op inzage in uw persoonsgegevens</li>
              <li>Recht op correctie van onjuiste gegevens</li>
              <li>Recht op verwijdering van uw gegevens</li>
              <li>Recht op beperking van de verwerking</li>
              <li>Recht op overdraagbaarheid van uw gegevens</li>
              <li>Recht om bezwaar te maken tegen de verwerking</li>
            </ul>
            <p className="text-secondary-600 mb-6">
              Om gebruik te maken van deze rechten kunt u contact met ons opnemen
              via onderstaande contactgegevens. Wij zullen zo snel mogelijk, maar
              uiterlijk binnen 30 dagen, op uw verzoek reageren. U heeft
              daarnaast altijd het recht om een klacht in te dienen bij de
              Autoriteit Persoonsgegevens.
            </p>

            {/* Contact */}
            <h2 className="heading-2 mb-4">Contact</h2>
            <p className="text-secondary-600 mb-4">
              Heeft u vragen over dit privacybeleid of wilt u gebruik maken van
              uw rechten? Neem dan contact met ons op:
            </p>
            <div className="bg-secondary-50 rounded-2xl p-6 mb-6">
              <p className="text-secondary-700 font-semibold mb-2">Enjoy Taxi</p>
              <p className="text-secondary-600">KVK: 27293969</p>
              <p className="text-secondary-600">
                E-mail:{' '}
                <a
                  href="mailto:info@enjoytaxi.nl"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  info@enjoytaxi.nl
                </a>
              </p>
              <p className="text-secondary-600">
                Telefoon:{' '}
                <a
                  href="tel:+31620172767"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  06 2017 2767
                </a>
              </p>
            </div>

            <p className="text-secondary-500 text-sm">
              Dit privacybeleid is voor het laatst bijgewerkt op 1 januari 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
