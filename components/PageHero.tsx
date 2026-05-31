import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  titleHighlight?: string
  subtitle: string
  badge?: string
  image?: string
  breadcrumb?: {
    label: string
    href?: string
  }[]
  children?: React.ReactNode
}

export default function PageHero({
  title,
  titleHighlight,
  subtitle,
  badge,
  image = '/taxi-vredespaleis.webp',
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-accent-900 pt-32 md:pt-40 pb-28 md:pb-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Enjoy Taxi - Taxi Den Haag & Leiden"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/95 via-accent-900/85 to-accent-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav
              className="flex items-center justify-center gap-2 text-sm text-primary-300 mb-5"
              aria-label="Breadcrumb"
            >
              {breadcrumb.map((item, index) => (
                <span key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span className="text-accent-500" aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full mb-5">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-primary-300 text-sm font-semibold">{badge}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {title}
            {titleHighlight && <span className="block text-gradient-blue">{titleHighlight}</span>}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-accent-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Additional content (buttons, etc.) */}
          {children}
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L0 50C180 60 360 35 540 30C720 25 900 35 1080 42C1260 50 1350 55 1440 58L1440 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
