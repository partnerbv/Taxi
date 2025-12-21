interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  service?: string
  avatar?: string
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Mark de Vries',
    rating: 5,
    text: 'Fantastische service! De Tesla was ongelooflijk comfortabel en de chauffeur was zeer professioneel. Perfecte rit naar Schiphol.',
    date: '2024-12-01',
    service: 'Luchthaven Transfer',
    avatar: 'MV',
  },
  {
    id: '2',
    name: 'Sophie Jansen',
    rating: 5,
    text: 'Ik gebruik Enjoy Taxi regelmatig voor zakelijke afspraken. Altijd op tijd, stijlvolle auto\'s en discrete service. Aanrader!',
    date: '2024-11-28',
    service: 'Zakelijk Vervoer',
    avatar: 'SJ',
  },
  {
    id: '3',
    name: 'Thomas Bakker',
    rating: 5,
    text: 'Het feit dat ze 100% elektrisch rijden was voor mij de doorslaggevende factor. Geweldige ervaring, zeker voor herhaling vatbaar.',
    date: '2024-11-25',
    service: 'VIP Service',
    avatar: 'TB',
  },
  {
    id: '4',
    name: 'Lisa van den Berg',
    rating: 5,
    text: 'Onze bruiloftsgasten waren onder de indruk van de Tesla\'s. Professionele service en prachtige auto\'s. Dank jullie wel!',
    date: '2024-11-20',
    service: 'Evenementen',
    avatar: 'LB',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} van 5 sterren`}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-amber-400' : 'text-secondary-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewList() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-secondary-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 mb-6">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Klantbeoordelingen</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Wat Onze <span className="text-primary-600">Klanten</span> Zeggen
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Ontdek waarom meer dan 1000 tevreden klanten voor Enjoy Taxi kiezen
          </p>
        </div>

        {/* Google Rating Banner */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-white rounded-2xl shadow-xl shadow-secondary-900/5 border border-secondary-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-7 h-7 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="h-12 w-px bg-secondary-200" />
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-900">5.0</div>
              <div className="text-sm text-secondary-500 font-medium">Gemiddelde score</div>
            </div>
            <div className="h-12 w-px bg-secondary-200" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">127</div>
              <div className="text-sm text-secondary-500 font-medium">Beoordelingen</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => {
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-amber-500',
              'from-emerald-500 to-teal-500',
            ]
            return (
              <article
                key={review.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-secondary-900/5 border border-secondary-100 hover:shadow-xl hover:border-secondary-200 transition-all duration-300"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-16 h-16 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {review.avatar}
                      </div>
                      <div>
                        <h3
                          className="font-bold text-lg text-secondary-900"
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <span itemProp="name">{review.name}</span>
                        </h3>
                        {review.service && (
                          <span className="inline-flex items-center gap-1.5 text-sm text-primary-600 font-medium">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            {review.service}
                          </span>
                        )}
                      </div>
                    </div>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(review.rating)} />
                      <meta itemProp="bestRating" content="5" />
                      <StarRating rating={review.rating} />
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-secondary-600 text-lg leading-relaxed mb-6" itemProp="reviewBody">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-secondary-100">
                    <time
                      className="text-sm text-secondary-400 font-medium"
                      itemProp="datePublished"
                      dateTime={review.date}
                    >
                      {new Date(review.date).toLocaleDateString('nl-NL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <div className="flex items-center gap-1.5 text-sm text-secondary-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                      Geverifieerd
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
