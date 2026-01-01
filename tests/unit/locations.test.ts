import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations'

describe('Locations Data', () => {
  it('should have at least one location', () => {
    expect(locations.length).toBeGreaterThan(0)
  })

  it('should have all required fields for each location', () => {
    locations.forEach((location) => {
      expect(location).toHaveProperty('slug')
      expect(location).toHaveProperty('name')
      expect(location).toHaveProperty('region')
      expect(location).toHaveProperty('description')
      expect(location).toHaveProperty('popularRoutes')
      expect(location).toHaveProperty('metaTitle')
      expect(location).toHaveProperty('metaDescription')
    })
  })

  it('should have unique slugs', () => {
    const slugs = locations.map((l) => l.slug)
    const uniqueSlugs = [...new Set(slugs)]
    expect(slugs.length).toBe(uniqueSlugs.length)
  })

  it('should have at least one popular route per location', () => {
    locations.forEach((location) => {
      expect(location.popularRoutes.length).toBeGreaterThan(0)
    })
  })

  it('popular routes should have destination and price', () => {
    locations.forEach((location) => {
      location.popularRoutes.forEach((route) => {
        expect(route).toHaveProperty('destination')
        expect(route).toHaveProperty('priceFrom')
        expect(typeof route.priceFrom).toBe('number')
        expect(route.priceFrom).toBeGreaterThan(0)
      })
    })
  })
})

describe('getLocationBySlug', () => {
  it('should return the correct location for a valid slug', () => {
    const denHaag = getLocationBySlug('den-haag')
    expect(denHaag).toBeDefined()
    expect(denHaag?.name).toBe('Den Haag en Omgeving')
  })

  it('should return undefined for an invalid slug', () => {
    const unknown = getLocationBySlug('nonexistent-city')
    expect(unknown).toBeUndefined()
  })
})

describe('getAllLocationSlugs', () => {
  it('should return an array of slugs', () => {
    const slugs = getAllLocationSlugs()
    expect(Array.isArray(slugs)).toBe(true)
    expect(slugs.length).toBe(locations.length)
  })

  it('all slugs should be strings', () => {
    const slugs = getAllLocationSlugs()
    slugs.forEach((slug) => {
      expect(typeof slug).toBe('string')
    })
  })
})
