import type { MetadataRoute } from 'next'
import { locations } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://enjoytaxi.nl'
  const lastModified = new Date()

  // High priority location slugs (main cities and airports)
  const highPriorityLocations = ['taxi-den-haag', 'taxi-leiden', 'taxi-schiphol']
  const mediumPriorityLocations = ['taxi-delft', 'taxi-scheveningen', 'taxi-zoetermeer', 'taxi-rotterdam-the-hague-airport']

  // Static pages - optimized priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/schiphol`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/locaties`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Location pages with tiered priorities
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => {
    let priority = 0.75 // Default priority

    if (highPriorityLocations.includes(location.slug)) {
      priority = 0.9 // Main cities and Schiphol
    } else if (mediumPriorityLocations.includes(location.slug)) {
      priority = 0.85 // Secondary important locations
    }

    return {
      url: `${baseUrl}/${location.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority,
    }
  })

  // Sort location pages by priority (highest first)
  locationPages.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  return [...staticPages, ...locationPages]
}
