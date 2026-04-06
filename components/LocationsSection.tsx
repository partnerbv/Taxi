import Link from 'next/link'
import Image from 'next/image'
import { locations } from '@/data/locations'

export default function LocationsSection() {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Taxi Den Haag & Omgeving
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Betaalbare taxi service in <strong>Den Haag</strong> en omgeving. Van <strong>Wassenaar</strong> tot <strong>Voorburg</strong>, van <strong>Leidschendam</strong> tot <strong>Scheveningen</strong> - wij rijden overal.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                <div className="text-2xl font-bold text-primary-600">{locations.length}</div>
                <div className="text-sm text-secondary-500">Locaties</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-secondary-500">Service</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-secondary-200">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-secondary-500">Betrouwbaar</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/taxi-den-haag-hero.webp"
                alt="Taxi Den Haag"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary-200 -z-10" />
          </div>
        </div>

        {/* Location Grid - Wassenaar, Leidschendam and Voorburg first */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {(() => {
            const prioritySlugs = ['wassenaar', 'leidschendam', 'voorburg'];
            const priorityLocations = prioritySlugs
              .map(slug => locations.find(loc => loc.slug === slug))
              .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined);
            const otherLocations = locations.filter(loc =>
              !prioritySlugs.includes(loc.slug)
            ).slice(0, 7);
            return [...priorityLocations, ...otherLocations];
          })().map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}`}
              className="group p-5 bg-white rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                {location.name}
              </h3>
              <p className="text-xs text-secondary-500 mt-1">{location.region}</p>
            </Link>
          ))}
        </div>

        {/* Button below grid */}
        <div className="text-center mt-10">
          <Link
            href="/locaties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg"
          >
            Bekijk alle locaties
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
