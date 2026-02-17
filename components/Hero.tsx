import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/enjoy taxi.webp"
          alt="Enjoy Taxi - Taxi Den Haag 24/7 Beschikbaar"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay with color glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-primary-900/70" />
        {/* Color glow effects */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Taxi{' '}
              <span className="text-primary-300">Den Haag</span>
              <br />
              & Omgeving
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Betrouwbare taxi met transparante tarieven. 
              Altijd op tijd, professioneel en comfortabel vervoer
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+31620172767"
                className="inline-flex items-center justify-center px-7 py-3.5 font-semibold text-primary-600 text-sm bg-white rounded-lg transition-all duration-200 hover:bg-primary-50 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Bel Direct
              </a>
              <a
                href="https://wa.me/31620172767"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 font-semibold text-white text-sm bg-transparent border border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* USP Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-white">Betaalbare Prijzen</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-white">24/7 Service</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-white">Professioneel</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              {/* Electric Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-6">Waarom Enjoy Taxi?</h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">5.0</div>
                  <div className="text-xs text-white/70">Rating</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-white/70">Beschikbaar</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-300 mb-1">100%</div>
                  <div className="text-xs text-white/70">Betrouwbaar</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">15 min</div>
                  <div className="text-xs text-white/70">Ophaaltijd</div>
                </div>
              </div>

              {/* Quick Book CTA */}
              <a
                href="tel:+31620172767"
                className="flex items-center justify-center gap-2 w-full bg-white text-primary-600 font-semibold py-3.5 px-6 rounded-lg text-center hover:bg-primary-50 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Nu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider with 3D Driving Car */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-visible">
        <div className="relative h-[80px] md:h-[120px]">
          {/* Road Surface */}
          <svg
            viewBox="0 0 1440 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-[80px] md:h-[120px]"
            preserveAspectRatio="none"
          >
            {/* Main wave - white background */}
            <path
              d="M0 150L0 70C180 85 360 50 540 45C720 40 900 50 1080 60C1260 70 1350 80 1440 85L1440 150H0Z"
              fill="white"
            />
            {/* Road surface - dark asphalt look */}
            <path
              d="M0 68C180 83 360 48 540 43C720 38 900 48 1080 58C1260 68 1350 78 1440 83L1440 95C1350 90 1260 80 1080 70C900 60 720 50 540 55C360 60 180 95 0 80Z"
              fill="url(#asphaltGradient)"
            />
            {/* Road center line - dashed */}
            <path
              d="M0 74C180 89 360 54 540 49C720 44 900 54 1080 64C1260 74 1350 84 1440 89"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="30 20"
            />
            {/* Road edge highlight */}
            <path
              d="M0 68C180 83 360 48 540 43C720 38 900 48 1080 58C1260 68 1350 78 1440 83"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="asphaltGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#1a202c" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3D Animated Car */}
          <div className="absolute bottom-[35px] md:bottom-[55px] animate-drive" style={{ perspective: '500px' }}>
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Car shadow on road */}
              <div
                className="absolute -bottom-2 left-1/2 w-12 md:w-20 h-2 md:h-4 bg-black/30 rounded-full blur-sm animate-car-shadow"
              />

              {/* 3D Car Model */}
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl w-14 h-7 md:w-20 md:h-10"
                style={{ transform: 'rotateX(10deg)' }}
              >
                {/* Car body - main shape with 3D gradient */}
                <defs>
                  <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#91ce4d" />
                    <stop offset="50%" stopColor="#79ba3a" />
                    <stop offset="100%" stopColor="#5f9a2a" />
                  </linearGradient>
                  <linearGradient id="windowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="100%" stopColor="#0d0d1a" />
                  </linearGradient>
                  <linearGradient id="roofGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#aede6b" />
                    <stop offset="100%" stopColor="#91ce4d" />
                  </linearGradient>
                  <filter id="carShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.4"/>
                  </filter>
                </defs>

                {/* Underbody shadow */}
                <ellipse cx="40" cy="36" rx="30" ry="3" fill="rgba(0,0,0,0.2)" />

                {/* Car body lower */}
                <path
                  d="M8 28C8 28 10 24 18 22C26 20 54 20 62 22C70 24 72 28 72 28L72 32C72 33 71 34 70 34L10 34C9 34 8 33 8 32L8 28Z"
                  fill="url(#bodyGradient)"
                  filter="url(#carShadow)"
                />

                {/* Car body upper - cabin */}
                <path
                  d="M18 22C18 22 20 12 30 10C40 8 50 10 55 12C60 14 62 22 62 22L18 22Z"
                  fill="url(#bodyGradient)"
                />

                {/* Roof highlight */}
                <path
                  d="M22 18C22 14 28 11 40 11C52 11 58 14 58 18"
                  stroke="url(#roofGradient)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Windows - front */}
                <path
                  d="M24 20C24 16 28 13 34 13L34 20L24 20Z"
                  fill="url(#windowGradient)"
                  opacity="0.9"
                />

                {/* Windows - rear */}
                <path
                  d="M46 13C52 13 56 16 56 20L46 20L46 13Z"
                  fill="url(#windowGradient)"
                  opacity="0.9"
                />

                {/* Window divider (B-pillar) */}
                <rect x="38" y="13" width="4" height="9" fill="url(#bodyGradient)" />

                {/* Door line */}
                <line x1="40" y1="22" x2="40" y2="32" stroke="#497624" strokeWidth="0.5" />

                {/* Front wheel well */}
                <path d="M16 32C16 28 20 26 24 26C28 26 32 28 32 32" fill="#1a1a2e" />

                {/* Rear wheel well */}
                <path d="M48 32C48 28 52 26 56 26C60 26 64 28 64 32" fill="#1a1a2e" />

                {/* Front wheel with spinning animation */}
                <g className="origin-center animate-wheel" style={{ transformOrigin: '24px 32px' }}>
                  <circle cx="24" cy="32" r="6" fill="#1a1a2e" />
                  <circle cx="24" cy="32" r="4" fill="#333" />
                  <circle cx="24" cy="32" r="2" fill="#555" />
                  {/* Wheel spokes */}
                  <line x1="24" y1="28" x2="24" y2="36" stroke="#444" strokeWidth="1" />
                  <line x1="20" y1="32" x2="28" y2="32" stroke="#444" strokeWidth="1" />
                </g>

                {/* Rear wheel with spinning animation */}
                <g className="origin-center animate-wheel" style={{ transformOrigin: '56px 32px' }}>
                  <circle cx="56" cy="32" r="6" fill="#1a1a2e" />
                  <circle cx="56" cy="32" r="4" fill="#333" />
                  <circle cx="56" cy="32" r="2" fill="#555" />
                  {/* Wheel spokes */}
                  <line x1="56" y1="28" x2="56" y2="36" stroke="#444" strokeWidth="1" />
                  <line x1="52" y1="32" x2="60" y2="32" stroke="#444" strokeWidth="1" />
                </g>

                {/* Headlights */}
                <ellipse cx="70" cy="26" rx="2" ry="1.5" fill="#FFFFFF" />
                <ellipse cx="70" cy="26" rx="4" ry="3" fill="#FFFFFF" opacity="0.3" className="animate-headlight" />

                {/* Taillights */}
                <rect x="8" y="25" width="3" height="4" rx="1" fill="#FF3333" />
                <rect x="8" y="25" width="5" height="4" rx="1" fill="#FF3333" opacity="0.3" />

                {/* Logo area - front */}
                <circle cx="68" cy="22" r="2" fill="#79ba3a" stroke="#91ce4d" strokeWidth="0.5" />

                {/* Chrome trim */}
                <path
                  d="M10 28L70 28"
                  stroke="#aede6b"
                  strokeWidth="0.5"
                />

                {/* Side mirror */}
                <ellipse cx="20" cy="18" rx="2" ry="1" fill="url(#bodyGradient)" />
              </svg>

              {/* Motion blur / speed lines */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 flex flex-col gap-1 opacity-60">
                <div className="w-6 h-0.5 bg-gradient-to-l from-primary-400 to-transparent rounded-full" />
                <div className="w-8 h-0.5 bg-gradient-to-l from-primary-300 to-transparent rounded-full" />
                <div className="w-5 h-0.5 bg-gradient-to-l from-primary-400 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
