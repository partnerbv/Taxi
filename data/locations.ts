export interface PopularRoute {
  destination: string
  priceFrom: number
}

export interface Location {
  slug: string
  name: string
  region: string
  description: string
  longDescription: string
  highlights: string[]
  nearbyAirport?: string
  schipholDistance: string
  schipholTime: string
  popularRoutes: PopularRoute[]
  metaTitle: string
  metaDescription: string
}

export const locations: Location[] = [
  // Den Haag en omgeving
  {
    slug: 'den-haag',
    name: 'Den Haag en Omgeving',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Den Haag nodig? Enjoy Taxi is dé betrouwbare taxi service in Den Haag, Wassenaar, Voorburg en Leidschendam. 24/7 beschikbaar met professionele chauffeurs.',
    longDescription:
      'Bent u op zoek naar een betrouwbare taxi in Den Haag? Enjoy Taxi is uw betrouwbare taxiservice in de hofstad en omgeving. Wij rijden in Den Haag, Wassenaar, Voorburg, Leidschendam en Scheveningen met onze vaste prijzene betrouwbare service. Of u nu vanaf Den Haag Centraal, het Binnenhof, World Forum of uw huisadres vertrekt - wij staan 24/7 voor u klaar. Onze professionele chauffeurs bieden maximaal comfort voor zakelijke reizigers, toeristen en bewoners. Taxi Den Haag bestellen? Bel of WhatsApp en wij staan binnen 15 minuten bij u.',
    highlights: ['Binnenhof & Tweede Kamer', 'Den Haag Centraal & HS', 'World Forum', 'Madurodam', 'Vredespaleis', 'Internationale Zone'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '55 km',
    schipholTime: '40-55 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Den Haag | 24/7 Taxi Service | Enjoy Taxi',
    metaDescription:
      'Taxi Den Haag bestellen? ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Professionele chauffeurs ✓ Bel 06 2017 2767!',
  },
  // Den Haag Wijken
  {
    slug: 'bezuidenhout',
    name: 'Bezuidenhout',
    region: 'Den Haag',
    description:
      'Taxi Bezuidenhout nodig? Enjoy Taxi is uw betrouwbare taxiservice in Bezuidenhout bij Den Haag Centraal en het Beatrixkwartier. 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Bezuidenhout? Enjoy Taxi is uw betrouwbare taxiservice in deze populaire zakelijke wijk van Den Haag. Bezuidenhout ligt strategisch tussen Den Haag Centraal Station en het Beatrixkwartier, waar veel grote bedrijven en ministeries gevestigd zijn. Wij vervoeren dagelijks zakelijke reizigers naar Schiphol, bewoners en bezoekers. Met onze vaste prijzene betrouwbare service brengen wij u comfortabel naar elke bestemming in Den Haag, Wassenaar, Voorburg of Leidschendam. Bel of WhatsApp voor directe boeking.',
    highlights: ['Den Haag Centraal', 'Beatrixkwartier', 'Haagse Bos', 'World Trade Center', 'Ministeries'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '52 km',
    schipholTime: '40-50 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Bezuidenhout Den Haag | 24/7 Taxi | Enjoy Taxi',
    metaDescription:
      'Taxi Bezuidenhout bestellen? ✓ vaste prijzen ✓ Beatrixkwartier ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'centrum-den-haag',
    name: 'Centrum',
    region: 'Den Haag',
    description:
      'Taxi Den Haag Centrum nodig? Enjoy Taxi biedt betrouwbare taxiservice in het hart van Den Haag. Binnenhof, Passage, Grote Markt - 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in het centrum van Den Haag? Enjoy Taxi is uw betrouwbare taxipartner in het bruisende hart van de hofstad. Of u nu vertrekt vanaf het Binnenhof, de Passage, de Grote Markt of een van de vele hotels - wij staan 24/7 voor u klaar met onze vaste prijzene betrouwbare service. Het centrum is ideaal voor toeristen, zakelijke bezoekers van de ministeries en uitgaanspubliek. Onze professionele chauffeurs kennen alle straten en brengen u comfortabel naar Wassenaar, Voorburg, Leidschendam of de luchthaven.',
    highlights: ['Binnenhof', 'Passage', 'Grote Markt', 'Noordeinde', 'Plein', 'Lange Voorhout'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '55 km',
    schipholTime: '40-55 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Den Haag Centrum | 24/7 Taxi | Binnenhof | Enjoy Taxi',
    metaDescription:
      'Taxi Den Haag Centrum bestellen? ✓ vaste prijzen ✓ Binnenhof ✓ Passage ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'laak',
    name: 'Laak',
    region: 'Den Haag',
    description:
      'Taxi Laak nodig? Enjoy Taxi biedt betrouwbare taxiservice in Laak bij Den Haag HS. 24/7 beschikbaar met professionele chauffeurs.',
    longDescription:
      'Op zoek naar een taxi in Laak? Enjoy Taxi is de betrouwbare taxiservice voor deze dynamische wijk van Den Haag. Laak ligt direct bij Station Hollands Spoor en is uitstekend verbonden met de rest van de stad. Wij vervoeren dagelijks forensen naar Schiphol, bewoners naar Wassenaar of Voorburg, en bezoekers door heel Den Haag. Met onze vaste prijzene betrouwbare service reist u comfortabel en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Den Haag HS', 'Hollands Spoor', 'Laakkwartier', 'Binckhorst', 'Spoorwijk'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '53 km',
    schipholTime: '40-50 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Laak Den Haag | 24/7 Taxi | Hollands Spoor | Enjoy Taxi',
    metaDescription:
      'Taxi Laak bestellen? ✓ vaste prijzen ✓ Den Haag HS ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'loosduinen',
    name: 'Loosduinen',
    region: 'Den Haag',
    description:
      'Taxi Loosduinen nodig? Enjoy Taxi biedt betrouwbare taxiservice in Loosduinen bij Kijkduin. 24/7 beschikbaar met professionele chauffeurs.',
    longDescription:
      'Taxi nodig in Loosduinen? Enjoy Taxi is uw betrouwbare taxipartner in dit westelijke stadsdeel van Den Haag. Loosduinen ligt dicht bij Kijkduin en de kust, perfect voor strandliefhebbers en bewoners. Wij vervoeren u comfortabel naar Schiphol, Den Haag Centrum, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Kijkduin', 'Loosduinse Hoofdplein', 'Zuiderpark', 'De Uithof', 'Strand'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '58 km',
    schipholTime: '45-55 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Loosduinen Den Haag | 24/7 Taxi | Kijkduin | Enjoy Taxi',
    metaDescription:
      'Taxi Loosduinen bestellen? ✓ vaste prijzen ✓ Kijkduin ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'segbroek',
    name: 'Segbroek',
    region: 'Den Haag',
    description:
      'Taxi Segbroek nodig? Enjoy Taxi biedt betrouwbare taxiservice in Segbroek met Regentessekwartier en Valkenboskwartier. 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Segbroek? Enjoy Taxi is de betrouwbare taxiservice voor dit karakteristieke stadsdeel van Den Haag. Segbroek omvat geliefde wijken als het Regentessekwartier, Valkenboskwartier en Vogelwijk. Met veel winkels, restaurants en een levendige sfeer is dit een populair woongebied. Wij vervoeren bewoners naar Schiphol, Wassenaar, Voorburg, Leidschendam en alle andere bestemmingen. Met onze vaste prijzene betrouwbare service biedt u maximaal comfort. Bel of WhatsApp voor directe boeking.',
    highlights: ['Regentessekwartier', 'Valkenboskwartier', 'Vogelwijk', 'Frederik Hendriklaan', 'Goudenregenstraat'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '54 km',
    schipholTime: '40-50 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Segbroek Den Haag | 24/7 Taxi | Regentessekwartier | Enjoy Taxi',
    metaDescription:
      'Taxi Segbroek bestellen? ✓ vaste prijzen ✓ Regentessekwartier ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'ypenburg',
    name: 'Ypenburg',
    region: 'Den Haag',
    description:
      'Taxi Ypenburg nodig? Enjoy Taxi biedt betrouwbare taxiservice in Ypenburg, Den Haag. Moderne wijk nabij A4 en A13. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Ypenburg? Enjoy Taxi is uw betrouwbare taxipartner in deze moderne wijk van Den Haag. Ypenburg is een populaire wijk met veel jonge gezinnen en uitstekende voorzieningen. Door de ligging nabij de A4 en A13 bent u snel op Schiphol of in Wassenaar, Voorburg of Leidschendam. Wij vervoeren bewoners naar de luchthaven, naar het werk en overal waar u maar wilt. Met onze vaste prijzene betrouwbare service reist u comfortabel en milieuvriendelijk. Bel of WhatsApp voor directe boeking.',
    highlights: ['Winkelcentrum Ypenburg', 'Park Ypenburg', 'De Venen', 'Bosweide', 'Singels'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '48 km',
    schipholTime: '35-45 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Ypenburg Den Haag | 24/7 Taxi | Enjoy Taxi',
    metaDescription:
      'Taxi Ypenburg bestellen? ✓ vaste prijzen ✓ A4/A13 nabij ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'leidschenveen',
    name: 'Leidschenveen',
    region: 'Den Haag',
    description:
      'Taxi Leidschenveen nodig? Enjoy Taxi biedt betrouwbare taxiservice in Leidschenveen, Den Haag. Moderne wijk met station. 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Leidschenveen? Enjoy Taxi is de betrouwbare taxiservice voor deze moderne wijk van Den Haag. Leidschenveen heeft een eigen RandstadRail station, maar voor ritten naar Schiphol met bagage is de taxi ideaal. Wij vervoeren bewoners comfortabel naar de luchthaven, Wassenaar, Voorburg, Leidschendam en alle andere bestemmingen. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Station Leidschenveen', 'Winkelcentrum', 'Park Leidschenveen', 'De Prinsenhof', 'Vroondaal'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '45 km',
    schipholTime: '32-42 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Leidschenveen Den Haag | 24/7 Taxi | Enjoy Taxi',
    metaDescription:
      'Taxi Leidschenveen bestellen? ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'mariahoeve',
    name: 'Mariahoeve',
    region: 'Den Haag',
    description:
      'Taxi Mariahoeve nodig? Enjoy Taxi biedt betrouwbare taxiservice in Mariahoeve, Den Haag. Groene wijk nabij Clingendael. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Mariahoeve? Enjoy Taxi is uw betrouwbare taxipartner in deze groene wijk van Den Haag. Mariahoeve staat bekend om haar ruime opzet met veel groen, nabij het Haagse Bos en Clingendael. Het eigen NS-station biedt openbaar vervoer, maar voor comfort kiest u voor onze betaalbare taxi. Wij brengen u naar Schiphol, Wassenaar, Voorburg, Leidschendam of waar u maar wilt. Met onze vaste prijzen reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking.',
    highlights: ['Station Mariahoeve', 'Haagse Bos', 'Clingendael', 'Marlot', 'Bezuidenhout-West'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '50 km',
    schipholTime: '38-48 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Mariahoeve Den Haag | 24/7 Taxi | Clingendael | Enjoy Taxi',
    metaDescription:
      'Taxi Mariahoeve bestellen? ✓ vaste prijzen ✓ Clingendael ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'statenkwartier',
    name: 'Statenkwartier',
    region: 'Den Haag',
    description:
      'Taxi Statenkwartier nodig? Enjoy Taxi biedt betrouwbare taxiservice in het Statenkwartier bij het Vredespaleis. 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in het Statenkwartier? Enjoy Taxi is de betrouwbare taxiservice voor deze stijlvolle wijk van Den Haag. Het Statenkwartier ligt tussen het centrum en Scheveningen, met prachtige architectuur en een kosmopolitische sfeer. Veel ambassades en internationale organisaties zijn hier gevestigd. Onze vaste prijzene betrouwbare taxi past perfect bij het karakter van deze wijk. Discrete, professionele service naar Schiphol, Wassenaar, Voorburg, Leidschendam of andere bestemmingen. Bel of WhatsApp voor directe boeking.',
    highlights: ['Vredespaleis', 'Scheveningseweg', 'Frederik Hendriklaan', 'Ambassades', 'Westbroekpark'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '52 km',
    schipholTime: '40-50 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Statenkwartier Den Haag | 24/7 Taxi | Vredespaleis | Enjoy Taxi',
    metaDescription:
      'Taxi Statenkwartier bestellen? ✓ vaste prijzen ✓ Vredespaleis ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'benoordenhout',
    name: 'Benoordenhout',
    region: 'Den Haag',
    description:
      'Taxi Benoordenhout nodig? Enjoy Taxi biedt betrouwbare taxiservice in Benoordenhout nabij het Haagse Bos. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Benoordenhout? Enjoy Taxi is uw betrouwbare taxipartner in deze mooie wijk van Den Haag. Benoordenhout is een van de meest gewilde woonadressen van de stad, met prachtige villa\'s, veel groen en nabijheid van het Haagse Bos. Onze vaste prijzene betrouwbare service past perfect bij de standing van deze wijk. Wij vervoeren bewoners discreet en professioneel naar Schiphol, Wassenaar, Voorburg, Leidschendam en internationale scholen. Bel of WhatsApp voor directe boeking.',
    highlights: ['Haagse Bos', 'Clingendael', 'Van Stolkpark', 'Internationale scholen', 'Ambassaderesidenties'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '48 km',
    schipholTime: '35-45 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Benoordenhout Den Haag | Betaalbare Taxi | Enjoy Taxi',
    metaDescription:
      'Taxi Benoordenhout bestellen? ✓ Betrouwbare service ✓ Haagse Bos ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'scheveningen',
    name: 'Scheveningen',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Scheveningen nodig? Enjoy Taxi biedt betrouwbare taxi service in Scheveningen. Van Kurhaus, boulevard of haven - 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Scheveningen? Enjoy Taxi is de betrouwbare taxiservice voor de populairste badplaats van Nederland. Onze vaste prijzene betrouwbare service haalt u op bij het Kurhaus, de Pier, de haven, boulevard of uw vakantieadres. Ideaal voor hotelgasten, toeristen, congresgangers en bewoners. Onze professionele chauffeurs kennen Scheveningen uitstekend en brengen u comfortabel naar Den Haag centrum, Wassenaar of de luchthaven. Bel of WhatsApp voor directe boeking.',
    highlights: ['Kurhaus', 'Scheveningse Pier', 'Sea Life', 'De Haven', 'Boulevard', 'Circustheater', 'AFAS Circustheater'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '60 km',
    schipholTime: '45-60 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Scheveningen | 24/7 Taxi | Kurhaus & Strand | Enjoy Taxi',
    metaDescription:
      'Taxi Scheveningen bestellen? ✓ vaste prijzen ✓ Kurhaus & Boulevard ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'delft',
    name: 'Delft',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Delft nodig? Enjoy Taxi biedt betrouwbare taxiservice in Delft. TU Delft, centrum en station - 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Delft? Enjoy Taxi biedt betrouwbare taxiservice in de historische stad Delft. Wij vervoeren dagelijks studenten en medewerkers van de TU Delft, toeristen die het centrum en de beroemde Delfts Blauw fabrieken bezoeken, en zakelijke reizigers. Vanaf Delft Station of het centrum brengen wij u comfortabel naar Schiphol, Den Haag, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking.',
    highlights: ['TU Delft Campus', 'Oude Kerk & Nieuwe Kerk', 'Markt', 'Royal Delft', 'Station Delft', 'Prinsenhof'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '50 km',
    schipholTime: '35-50 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Delft | 24/7 Taxi | TU Delft & Centrum | Enjoy Taxi',
    metaDescription:
      'Taxi Delft bestellen? ✓ vaste prijzen ✓ TU Delft ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'rijswijk',
    name: 'Rijswijk',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Rijswijk nodig? Enjoy Taxi biedt betrouwbare taxiservice in Rijswijk tussen Den Haag en Delft. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Rijswijk? Enjoy Taxi is uw betrouwbare taxipartner in Rijswijk. De centrale ligging tussen Den Haag en Delft maakt Rijswijk ideaal verbonden. Wij vervoeren dagelijks zakelijke reizigers, bewoners naar Schiphol, en bezoekers naar Den Haag, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service en professionele chauffeurs bent u verzekerd van betrouwbaar vervoer. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Rijswijk Centrum', 'Station Rijswijk', 'In de Bogaard', 'Landgoed Te Werve', 'Rijswijkse Bos'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '48 km',
    schipholTime: '35-45 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Rijswijk | 24/7 Taxi | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Rijswijk bestellen? ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'zoetermeer',
    name: 'Zoetermeer',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Zoetermeer nodig? Enjoy Taxi biedt betrouwbare taxiservice in Zoetermeer. Snowworld, Stadshart en station - 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Zoetermeer? Enjoy Taxi is de betrouwbare taxiservice voor Zoetermeer en omgeving. Als snelgroeiende stad met veel bedrijven en attracties zoals Snowworld, vervoeren wij dagelijks bewoners en bezoekers. Vanaf Zoetermeer Centrum West of andere locaties brengen wij u comfortabel naar Schiphol, Den Haag, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking.',
    highlights: ['Snowworld', 'Stadshart', 'Station Zoetermeer', 'Dutch Water Dreams', 'Westerpark'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '45 km',
    schipholTime: '35-50 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Zoetermeer | 24/7 Taxi | Snowworld | Enjoy Taxi',
    metaDescription:
      'Taxi Zoetermeer bestellen? ✓ vaste prijzen ✓ Snowworld ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'leidschendam',
    name: 'Leidschendam',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Leidschendam nodig? Enjoy Taxi biedt betrouwbare taxi service in Leidschendam. Bij Mall of the Netherlands en Voorburg. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Leidschendam? Enjoy Taxi is uw betrouwbare taxiservice in Leidschendam-Voorburg. Onze vaste prijzene betrouwbare service brengt u comfortabel naar elke bestemming. Wij halen u op bij Mall of the Netherlands, Leidsenhage, de Vliet of uw huisadres. Door de centrale ligging tussen Den Haag, Voorburg en Zoetermeer bent u snel waar u moet zijn. Zakelijke rit, luchthaven transfer of dagje uit? Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Mall of the Netherlands', 'Vlietland', 'Leidsenhage', 'De Heuvel', 'Vliet', 'Stompwijk'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '42 km',
    schipholTime: '30-45 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Leidschendam | 24/7 Taxi | Mall of NL | Enjoy Taxi',
    metaDescription:
      'Taxi Leidschendam bestellen? ✓ vaste prijzen ✓ Mall of the Netherlands ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'voorburg',
    name: 'Voorburg',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Voorburg nodig? Enjoy Taxi biedt betrouwbare taxi service in Voorburg. Direct naast Den Haag gelegen. 24/7 beschikbaar met professionele chauffeurs.',
    longDescription:
      'Taxi nodig in Voorburg? Enjoy Taxi is uw betrouwbare taxiservice in dit historische stadje direct naast Den Haag. Voorburg grenst aan Leidschendam en Den Haag, waardoor u snel op uw bestemming bent. Wij halen u op bij Station Voorburg, Museum Swaensteyn, het historische centrum of uw huisadres. Onze vaste prijzene betrouwbare service biedt maximaal comfort voor bewoners en bezoekers. Zakelijke rit naar Den Haag of een transfer naar Schiphol? Bel of WhatsApp voor directe boeking.',
    highlights: ['Station Voorburg', 'Museum Swaensteyn', 'Hofwijck', 'Essesteijn', 'Park Leeuwenbergh', 'Historisch Centrum'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '40 km',
    schipholTime: '30-40 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Voorburg | 24/7 Taxi Service | Enjoy Taxi',
    metaDescription:
      'Taxi Voorburg bestellen? ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Professionele chauffeurs ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'wassenaar',
    name: 'Wassenaar',
    region: 'Den Haag en Omgeving',
    description:
      'Taxi Wassenaar nodig? Enjoy Taxi biedt betrouwbare taxi service in Wassenaar. Vervoer dat past bij deze stijlvolle gemeente. 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Wassenaar? Enjoy Taxi biedt betrouwbare taxiservice die perfect past bij het karakter van Wassenaar. Onze vaste prijzene betrouwbare service is ideaal voor bewoners en bezoekers van deze gemeente. Wij verzorgen discrete vervoer naar internationale scholen zoals de American School of The Hague, ambassaderesidenties, Duinrell en het prachtige strand. Onze professionele chauffeurs kennen Wassenaar en omgeving uitstekend. Bel of WhatsApp voor directe boeking.',
    highlights: ['Duinrell', 'Meijendel', 'Landgoed Clingendael', 'Strand Wassenaar', 'Amerikaanse School', 'Ambassades'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '35 km',
    schipholTime: '25-40 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Wassenaar | Betaalbare Taxi | 24/7 | Enjoy Taxi',
    metaDescription:
      'Taxi Wassenaar bestellen? ✓ Betrouwbare service ✓ 24/7 beschikbaar ✓ Professionele chauffeurs ✓ Bel 06 2017 2767!',
  },
  // Leiden en omgeving
  {
    slug: 'leiden',
    name: 'Leiden',
    region: 'Leiden e.o.',
    description:
      'Taxi Leiden nodig? Enjoy Taxi biedt betrouwbare taxiservice in Leiden. Universiteit, LUMC en Centraal - 24/7 beschikbaar.',
    longDescription:
      'Bent u op zoek naar een betrouwbare taxi in Leiden? Enjoy Taxi is de betrouwbare taxiservice voor de oudste universiteitsstad van Nederland. Wij vervoeren dagelijks studenten, wetenschappers en bezoekers van de Universiteit Leiden en het LUMC. Ook toeristen die de historische binnenstad verkennen maken graag gebruik van onze service. Vanaf Leiden Centraal brengen wij u comfortabel naar Schiphol, Den Haag, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking.',
    highlights: ['Universiteit Leiden', 'LUMC', 'Leiden Centraal', 'Pieterskerk', 'Naturalis', 'Hortus Botanicus', 'Rijksmuseum van Oudheden'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '30 km',
    schipholTime: '20-35 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Leiden | 24/7 Taxi | Universiteit & LUMC | Enjoy Taxi',
    metaDescription:
      'Taxi Leiden bestellen? ✓ vaste prijzen ✓ Universiteit ✓ LUMC ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'katwijk',
    name: 'Katwijk',
    region: 'Leiden e.o.',
    description:
      'Taxi Katwijk nodig? Enjoy Taxi biedt betrouwbare taxiservice in Katwijk aan Zee. ESA/ESTEC en strand - 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Katwijk? Enjoy Taxi is de betrouwbare taxiservice voor Katwijk aan Zee en Katwijk aan den Rijn. Wij vervoeren dagelijks bezoekers en medewerkers van ESA/ESTEC, strandgangers, en bewoners naar Schiphol, Den Haag, Wassenaar of Voorburg. Katwijk is een populaire badplaats en onze chauffeurs kennen alle hotels en attracties. Met onze vaste prijzene betrouwbare service reist u comfortabel en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['ESA/ESTEC', 'Strand Katwijk', 'Boulevard', 'Katwijks Museum', 'Spinozaweg'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '35 km',
    schipholTime: '25-40 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Katwijk | 24/7 Taxi | ESA/ESTEC & Strand | Enjoy Taxi',
    metaDescription:
      'Taxi Katwijk bestellen? ✓ vaste prijzen ✓ ESA/ESTEC ✓ Strand ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'noordwijk',
    name: 'Noordwijk',
    region: 'Leiden e.o.',
    description:
      'Taxi Noordwijk nodig? Enjoy Taxi biedt betrouwbare taxiservice in Noordwijk aan Zee. Space Expo en strand - 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Noordwijk? Enjoy Taxi is de betrouwbare taxiservice voor deze populaire badplaats en congreslocatie. Noordwijk is bekend om haar stranden, bloembollenvelden en Space Expo. Wij vervoeren dagelijks hotelgasten, congresgangers en toeristen naar Schiphol, Den Haag, Wassenaar of Voorburg. Met onze vaste prijzene betrouwbare service reist u comfortabel en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Space Expo', 'Huis ter Duin', 'Strand Noordwijk', 'Bloembollenvelden', 'Golfbaan'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '38 km',
    schipholTime: '30-45 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Noordwijk | 24/7 Taxi | Space Expo & Strand | Enjoy Taxi',
    metaDescription:
      'Taxi Noordwijk bestellen? ✓ vaste prijzen ✓ Space Expo ✓ Congressen ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'voorschoten',
    name: 'Voorschoten',
    region: 'Leiden e.o.',
    description:
      'Taxi Voorschoten nodig? Enjoy Taxi biedt betrouwbare taxiservice in Voorschoten tussen Leiden en Den Haag. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Voorschoten? Enjoy Taxi is uw betrouwbare taxipartner in dit groene dorp tussen Leiden en Den Haag. De centrale ligging maakt Voorschoten ideaal voor snelle verbindingen naar Schiphol, Den Haag, Wassenaar, Voorburg of Leidschendam. Wij vervoeren bewoners naar de luchthaven en zakelijke reizigers naar kantoren in de regio. Met onze vaste prijzene betrouwbare service en professionele chauffeurs bent u verzekerd van kwaliteit. Bel of WhatsApp voor directe boeking.',
    highlights: ['Landgoed Berbice', 'Voorschoten Centrum', 'Station Voorschoten', 'Vlietlanden'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '28 km',
    schipholTime: '20-35 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Voorschoten | 24/7 Taxi | Leiden & Den Haag | Enjoy Taxi',
    metaDescription:
      'Taxi Voorschoten bestellen? ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'oegstgeest',
    name: 'Oegstgeest',
    region: 'Leiden e.o.',
    description:
      'Taxi Oegstgeest nodig? Enjoy Taxi biedt betrouwbare taxiservice in Oegstgeest bij Leiden. LUMC en Bio Science Park - 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Oegstgeest? Enjoy Taxi is de betrouwbare taxiservice voor dit groene dorp direct naast Leiden. Door de nabijheid van de Universiteit Leiden en het LUMC vervoeren wij veel academici, medische professionals en bezoekers. Wij brengen u comfortabel naar Schiphol, Den Haag, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Bio Science Park', 'LUMC', 'Endegeest', 'Oegstgeest Centrum', 'Poelgeest'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '27 km',
    schipholTime: '20-30 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Oegstgeest | 24/7 Taxi | LUMC & Bio Science | Enjoy Taxi',
    metaDescription:
      'Taxi Oegstgeest bestellen? ✓ vaste prijzen ✓ LUMC ✓ Bio Science Park ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'leiderdorp',
    name: 'Leiderdorp',
    region: 'Leiden e.o.',
    description:
      'Taxi Leiderdorp nodig? Enjoy Taxi biedt betrouwbare taxiservice in Leiderdorp bij Leiden. Nabij A4 voor snelle verbindingen - 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Leiderdorp? Enjoy Taxi is uw betrouwbare taxiservice in Leiderdorp. Dit dorp grenst direct aan Leiden en biedt snelle toegang tot de A4 richting Schiphol. Wij vervoeren bewoners naar de luchthaven, en zakelijke reizigers naar Den Haag, Wassenaar, Voorburg of Leidschendam. Met onze vaste prijzene betrouwbare service reist u comfortabel en milieuvriendelijk. Bel of WhatsApp voor directe boeking met vaste prijs.',
    highlights: ['Winkelhof', 'Leiderdorp Centrum', 'De Bloemerd', 'Sportpark Leiderdorp'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '28 km',
    schipholTime: '20-30 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Leiderdorp | 24/7 Taxi | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Leiderdorp bestellen? ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Bel 06 2017 2767!',
  },
  // Luchthavens
  {
    slug: 'schiphol',
    name: 'Schiphol Airport',
    region: 'Luchthaven',
    description:
      'Taxi Schiphol naar Den Haag voor €79 - vaste prijs, geen verrassingen. Enjoy Taxi biedt 24/7 Schiphol taxi service met vaste prijzen comfort en flight tracking.',
    longDescription:
      'Schiphol taxi nodig naar Den Haag? Enjoy Taxi is uw betrouwbare taxiservice van en naar Schiphol Airport. Wij monitoren uw vlucht en staan op tijd klaar bij Aankomsthal 1, 2, 3 of 4. Bij vertraging van uw vlucht passen wij de ophaaltijd automatisch aan - zonder extra kosten. Onze professionele chauffeurs brengen u via de snelste route naar Den Haag, Wassenaar, Voorburg, Leidschendam of Scheveningen. Reis comfortabel in onze vaste prijzene auto met gratis WiFi. Bel of WhatsApp voor directe boeking.',
    highlights: ['Aankomsthal 1-4', 'Vertrekhal', 'Schiphol Plaza', 'Flight Tracking', 'Meet & Greet'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '0 km',
    schipholTime: '-',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 79 },
      { destination: 'Rotterdam Airport', priceFrom: 55 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Schiphol Den Haag €79 | 24/7 Taxi | Enjoy Taxi',
    metaDescription:
      'Schiphol taxi naar Den Haag €79. ✓ Vaste prijs ✓ Flight tracking ✓ vaste prijzen ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
  {
    slug: 'rotterdam-the-hague-airport',
    name: 'Rotterdam The Hague Airport',
    region: 'Luchthaven',
    description:
      'Taxi Rotterdam The Hague Airport naar Den Haag voor €55 - vaste prijs. Enjoy Taxi biedt 24/7 betrouwbare luchthaven transfers met vaste prijs.',
    longDescription:
      'Taxi nodig van Rotterdam The Hague Airport? Enjoy Taxi is uw betrouwbare taxiservice voor deze regionale luchthaven. Wij staan klaar bij de terminal en brengen u comfortabel naar Den Haag, Wassenaar, Voorburg, Leidschendam of Scheveningen. Met onze vaste prijzene betrouwbare service reist u stil en milieuvriendelijk. Ideaal voor zakenreizigers en vakantiegangers die via Rotterdam vliegen. Vaste prijzen, geen verrassingen. Bel of WhatsApp voor directe boeking.',
    highlights: ['Terminal', 'Parkeren P1/P2', 'Business Lounge', 'Autoverhuur'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '45 km',
    schipholTime: '35-45 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 55 },
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Eindhoven Airport', priceFrom: 149 },
    ],
    metaTitle: 'Taxi Rotterdam Airport | 24/7 Taxi | Den Haag €55 | Enjoy Taxi',
    metaDescription:
      'Rotterdam Airport taxi naar Den Haag €55. ✓ vaste prijzen ✓ Vaste prijs ✓ 24/7 beschikbaar ✓ Bel 06 2017 2767!',
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug)
}
