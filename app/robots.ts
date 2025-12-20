import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/_next/static/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/_next/static/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/'],
      },
    ],
    sitemap: 'https://enjoytaxi.nl/sitemap.xml',
    host: 'https://enjoytaxi.nl',
  }
}
