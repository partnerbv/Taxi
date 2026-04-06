import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Enjoy Taxi Den Haag',
  description:
    'Lees de algemene voorwaarden van Enjoy Taxi Den Haag. Informatie over reserveringen, prijzen, annulering en meer.',
  alternates: {
    canonical: 'https://enjoytaxi.nl/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Algemene Voorwaarden"
        subtitle="Hieronder vindt u de algemene voorwaarden die van toepassing zijn op alle diensten van Enjoy Taxi."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Algemene Voorwaarden' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-secondary">
            {/* Definities */}
            <h2 className="heading-2 mb-4">Artikel 1 - Definities</h2>
            <p className="text-secondary-600 mb-4">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                <strong>Enjoy Taxi:</strong> Enjoy Taxi, ingeschreven bij de Kamer
                van Koophandel onder nummer 27293969, gevestigd te Den Haag.
              </li>
              <li>
                <strong>Klant:</strong> de natuurlijke persoon of rechtspersoon die
                een reservering plaatst bij Enjoy Taxi of gebruik maakt van de
                diensten van Enjoy Taxi.
              </li>
              <li>
                <strong>Diensten:</strong> alle door Enjoy Taxi aangeboden
                vervoersdiensten, waaronder taxi-, transfer- en
                evenementenvervoer.
              </li>
              <li>
                <strong>Reservering:</strong> de overeenkomst tussen de klant en
                Enjoy Taxi voor het uitvoeren van een rit.
              </li>
              <li>
                <strong>Rit:</strong> het vervoer van de klant van een ophaaladres
                naar een bestemmingsadres.
              </li>
            </ul>

            {/* Toepasselijkheid */}
            <h2 className="heading-2 mb-4">Artikel 2 - Toepasselijkheid</h2>
            <p className="text-secondary-600 mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen,
              offertes, reserveringen en overeenkomsten tussen Enjoy Taxi en de
              klant.
            </p>
            <p className="text-secondary-600 mb-6">
              Door het plaatsen van een reservering of het gebruik maken van onze
              diensten gaat u akkoord met deze algemene voorwaarden. Afwijkingen
              van deze voorwaarden zijn alleen geldig indien schriftelijk
              overeengekomen.
            </p>

            {/* Reserveringen */}
            <h2 className="heading-2 mb-4">Artikel 3 - Reserveringen</h2>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                Reserveringen kunnen worden geplaatst via onze website, per
                telefoon of per e-mail.
              </li>
              <li>
                Een reservering is bevestigd zodra u een bevestiging van ons heeft
                ontvangen per e-mail, SMS of WhatsApp.
              </li>
              <li>
                De klant is verantwoordelijk voor het verstrekken van correcte
                gegevens bij de reservering, waaronder ophaaladres,
                bestemmingsadres, datum, tijdstip en aantal passagiers.
              </li>
              <li>
                Enjoy Taxi streeft ernaar om op het afgesproken tijdstip aanwezig
                te zijn, maar kan niet aansprakelijk worden gesteld voor
                vertragingen als gevolg van overmacht, zoals verkeersopstoppingen,
                weersomstandigheden of wegwerkzaamheden.
              </li>
              <li>
                De klant dient op het afgesproken tijdstip en op de afgesproken
                locatie aanwezig te zijn. Na een wachttijd van 15 minuten
                behoudt Enjoy Taxi zich het recht voor de reservering te
                annuleren, waarbij eventuele kosten in rekening kunnen worden
                gebracht.
              </li>
            </ul>

            {/* Prijzen en betaling */}
            <h2 className="heading-2 mb-4">Artikel 4 - Prijzen en betaling</h2>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                Alle prijzen zijn in euro&apos;s en inclusief BTW, tenzij anders
                vermeld.
              </li>
              <li>
                Voor ritten met een vaste prijs geldt de prijs zoals
                overeengekomen bij de reservering.
              </li>
              <li>
                Bij ritten op basis van de meter geldt het tarief zoals vermeld op
                de taximeter.
              </li>
              <li>
                Betaling geschiedt bij voorkeur contant, per pin of via een
                vooraf overeengekomen betaalmethode.
              </li>
              <li>
                Extra kosten kunnen in rekening worden gebracht voor wachttijden,
                extra stops, tolwegen of parkeergelden.
              </li>
              <li>
                Enjoy Taxi behoudt zich het recht voor om prijzen te wijzigen.
                Reeds bevestigde reserveringen worden uitgevoerd tegen de
                oorspronkelijk overeengekomen prijs.
              </li>
            </ul>

            {/* Annulering */}
            <h2 className="heading-2 mb-4">Artikel 5 - Annulering</h2>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                De klant kan een reservering kosteloos annuleren tot 2 uur voor
                het geplande vertrektijdstip.
              </li>
              <li>
                Bij annulering binnen 2 uur voor het geplande vertrektijdstip kan
                Enjoy Taxi annuleringskosten in rekening brengen.
              </li>
              <li>
                Bij niet-verschijnen (no-show) zonder voorafgaande annulering
                worden de volledige ritkosten in rekening gebracht.
              </li>
              <li>
                Annulering kan plaatsvinden via telefoon, e-mail of WhatsApp.
              </li>
            </ul>

            {/* Aansprakelijkheid */}
            <h2 className="heading-2 mb-4">Artikel 6 - Aansprakelijkheid</h2>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                Enjoy Taxi is verzekerd conform de wettelijke eisen voor
                personenvervoer.
              </li>
              <li>
                De aansprakelijkheid van Enjoy Taxi is beperkt tot het bedrag dat
                in het betreffende geval door de verzekeraar wordt uitgekeerd.
              </li>
              <li>
                Enjoy Taxi is niet aansprakelijk voor schade als gevolg van
                overmacht, waaronder verkeersopstoppingen, stakingen,
                weersomstandigheden of overheidsmaatregelen.
              </li>
              <li>
                Enjoy Taxi is niet aansprakelijk voor achtergelaten eigendommen in
                het voertuig. Wij zullen echter ons best doen om gevonden
                voorwerpen te retourneren.
              </li>
              <li>
                De klant is aansprakelijk voor schade aan het voertuig
                veroorzaakt door de klant of medereizigers.
              </li>
            </ul>

            {/* Klachten */}
            <h2 className="heading-2 mb-4">Artikel 7 - Klachten</h2>
            <p className="text-secondary-600 mb-4">
              Wij streven naar de hoogste kwaliteit, maar mocht u onverhoopt niet
              tevreden zijn, dan kunt u een klacht indienen:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              <li>
                Klachten dienen binnen 14 dagen na de rit te worden ingediend via
                e-mail naar{' '}
                <a
                  href="mailto:info@enjoytaxi.nl"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  info@enjoytaxi.nl
                </a>{' '}
                of telefonisch via{' '}
                <a
                  href="tel:+31620172767"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  06 2017 2767
                </a>
                .
              </li>
              <li>
                Wij zullen uw klacht zo spoedig mogelijk, maar uiterlijk binnen 14
                dagen, in behandeling nemen en u informeren over de afhandeling.
              </li>
            </ul>

            {/* Wijzigingen */}
            <h2 className="heading-2 mb-4">Artikel 8 - Wijzigingen</h2>
            <p className="text-secondary-600 mb-6">
              Enjoy Taxi behoudt zich het recht voor deze algemene voorwaarden te
              wijzigen. De meest actuele versie is altijd beschikbaar op onze
              website. Door na wijziging gebruik te blijven maken van onze
              diensten, accepteert u de gewijzigde voorwaarden.
            </p>

            {/* Toepasselijk recht */}
            <h2 className="heading-2 mb-4">Artikel 9 - Toepasselijk recht</h2>
            <p className="text-secondary-600 mb-6">
              Op alle overeenkomsten tussen Enjoy Taxi en de klant is Nederlands
              recht van toepassing. Geschillen worden voorgelegd aan de bevoegde
              rechter in Den Haag.
            </p>

            {/* Contact */}
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
              Deze algemene voorwaarden zijn voor het laatst bijgewerkt op 1
              januari 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
