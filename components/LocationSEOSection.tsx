import Link from 'next/link'
import { locations } from '@/data/locations'

// Belangrijkste locaties eerst tonen op de homepage
const priorityOrder = [
  'taxi-den-haag',
  'taxi-leiden',
  'taxi-scheveningen',
  'taxi-delft',
  'taxi-rijswijk',
  'taxi-voorburg',
  'taxi-wassenaar',
  'taxi-leidschendam',
]

export default function LocationSEOSection() {
  const sorted = [...locations].sort((a, b) => {
    const ai = priorityOrder.indexOf(a.slug)
    const bi = priorityOrder.indexOf(b.slug)
    if (ai === -1 && bi === -1) return 0
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })

  const displayLocations = sorted.slice(0, 8)

  return (
    <section id="locaties" className="relative py-20 md:py-28 bg-white">
      <div className="container-luxury">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-3">
            Taxi in Den Haag &amp; Omgeving
          </h2>
          <p className="text-accent-600">
            Wij rijden in heel de regio — klik voor tarieven en info per locatie
          </p>
        </div>

        {/* Compact Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {displayLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}`}
              className="group bg-white rounded-xl p-4 shadow-sm border border-accent-100 hover:shadow-md hover:border-primary-200 transition-all duration-200"
            >
              <h3 className="font-semibold text-accent-900 group-hover:text-primary-600 transition-colors mb-1">
                Taxi {location.name}
              </h3>
              <p className="text-xs text-accent-500 mb-2 line-clamp-1">Vaste tarieven, 24/7 beschikbaar</p>
              <div className="flex items-center text-primary-700 text-sm font-medium">
                <span>Bekijk info</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link href="/locaties" className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium">
            <span>Bekijk alle {locations.length} locaties</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
