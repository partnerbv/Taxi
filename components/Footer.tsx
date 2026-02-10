import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  diensten: [
    { name: 'Luchthaven Transfer', href: '/services#luchthaven' },
    { name: 'Zakelijk Vervoer', href: '/services#zakelijk' },
    { name: 'Evenementen', href: '/services#evenementen' },
    { name: 'VIP Service', href: '/services#vip' },
  ],
  regio: [
    { name: 'Den Haag', href: '/locations/den-haag' },
    { name: 'Leiden', href: '/locations/leiden' },
    { name: 'Delft', href: '/locations/delft' },
    { name: 'Schiphol', href: '/locations/schiphol' },
  ],
  bedrijf: [
    { name: 'Over Ons', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Algemene Voorwaarden', href: '/terms' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Enjoy Taxi Logo"
                width={280}
                height={80}
                className="h-12 md:h-14 w-auto scale-[3] origin-left brightness-0 invert"
              />
            </Link>
            <p className="text-secondary-300 mb-6 max-w-md">
              Betrouwbare taxi service met vaste prijzen. Comfortabel vervoer.
              Betaalbaar en comfortabel reizen voor de moderne reiziger.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+31620172767"
                className="flex items-center space-x-3 text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-primary-400"
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
                <span>06 2017 2767</span>
              </a>
              <a
                href="mailto:info@enjoytaxi.nl"
                className="flex items-center space-x-3 text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@enjoytaxi.nl</span>
              </a>
            </div>
            {/* Business Info */}
            <div className="mt-6 pt-6 border-t border-secondary-700">
              <div className="text-sm text-secondary-400 space-y-1">
                <p>KVK: 27293969</p>
                <p>BTW: NL002455187B87</p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Regio&apos;s</h3>
            <ul className="space-y-3">
              {footerLinks.regio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <p className="text-secondary-500 text-sm text-center">
            &copy; {currentYear} Enjoy Taxi. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
