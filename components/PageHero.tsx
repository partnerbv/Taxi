import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  titleHighlight?: string
  subtitle: string
  badge?: string
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
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/enjoy taxi.webp"
          alt="Enjoy Taxi - Taxi Den Haag met Vaste Prijzen"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/90 to-primary-900/80" />
        {/* Color glow effects */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-400/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav
              className="flex items-center justify-center space-x-2 text-sm text-white/70 mb-6"
              aria-label="Breadcrumb"
            >
              {breadcrumb.map((item, index) => (
                <span key={item.label} className="flex items-center space-x-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {title}
            {titleHighlight && (
              <span className="block text-primary-300">{titleHighlight}</span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Additional content (buttons, etc.) */}
          {children}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
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
