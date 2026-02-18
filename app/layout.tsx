import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://enjoytaxi.nl'),
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  title: {
    default: 'Taxi Den Haag & Leiden | 24/7 Betrouwbare Service | Enjoy Taxi',
    template: '%s',
  },
  description:
    'Taxi Den Haag en Leiden - Betrouwbare taxi service met transparante prijzen. ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Schiphol transfers ✓ Zakelijk vervoer. Bel nu!',
  keywords: [
    'taxi den haag',
    'taxi leiden',
    'taxi schiphol',
    'schiphol taxi',
    'taxi delft',
    'luchthaven taxi',
    'taxi vaste prijs',
    'betaalbare taxi',
    'taxi service den haag',
    'taxi service leiden',
    'zakelijk vervoer',
    'vip taxi',
    'taxi bestellen',
    '24 uur taxi',
  ],
  authors: [{ name: 'Enjoy Taxi' }],
  creator: 'Enjoy Taxi',
  publisher: 'Enjoy Taxi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://enjoytaxi.nl',
    siteName: 'Enjoy Taxi',
    title: 'Taxi Den Haag & Leiden | 24/7 Betrouwbare Service',
    description:
      'Betrouwbare taxi service in Den Haag en omgeving. 100% transparante prijzen, 24/7 beschikbaar. Professionele chauffeurs.',
    images: [
      {
        url: '/Taxi Den haag.jpg',
        width: 1200,
        height: 630,
        alt: 'Enjoy Taxi - Taxi Den Haag en Leiden',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Den Haag & Leiden | Enjoy Taxi',
    description:
      'Betrouwbare taxi service met transparante prijzen. 24/7 beschikbaar, Schiphol transfers.',
    images: ['/Taxi Den haag.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'geo.region': 'NL-ZH',
    'geo.placename': 'Den Haag',
    'geo.position': '52.0705;4.3007',
    'ICBM': '52.0705, 4.3007',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#79ba3a" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17817067496"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17817067496');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
