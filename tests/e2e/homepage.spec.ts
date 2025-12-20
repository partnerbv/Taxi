import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the hero section with correct headline', async ({ page }) => {
    await expect(page.getByText('Premium Elektrisch')).toBeVisible()
    await expect(page.getByText('Taxi Service')).toBeVisible()
  })

  test('should have working navigation links', async ({ page }) => {
    // Test navigation to Services page
    await page.getByRole('link', { name: /diensten/i }).first().click()
    await expect(page).toHaveURL('/services')

    // Navigate back to homepage
    await page.goto('/')

    // Test navigation to About page
    await page.getByRole('link', { name: /over ons/i }).first().click()
    await expect(page).toHaveURL('/about')

    // Navigate back to homepage
    await page.goto('/')

    // Test navigation to Contact page
    await page.getByRole('link', { name: /contact/i }).first().click()
    await expect(page).toHaveURL('/contact')
  })

  test('should have working phone CTA link', async ({ page }) => {
    const phoneLink = page.getByRole('link', { name: /bel direct/i }).first()
    await expect(phoneLink).toHaveAttribute('href', 'tel:+31620172767')
  })

  test('should have working WhatsApp CTA link', async ({ page }) => {
    const whatsappLink = page.getByRole('link', { name: /whatsapp/i }).first()
    await expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/31620172767')
  })

  test('should display services section', async ({ page }) => {
    await expect(page.getByText('Onze Diensten')).toBeVisible()
    await expect(page.getByText('Luchthaven Transfer')).toBeVisible()
    await expect(page.getByText('Zakelijk Vervoer')).toBeVisible()
  })

  test('should display reviews section', async ({ page }) => {
    await expect(page.getByText('Wat Onze Klanten Zeggen')).toBeVisible()
  })

  test('should display locations section', async ({ page }) => {
    await expect(page.getByText('Werkgebied')).toBeVisible()
    await expect(page.getByRole('link', { name: /den haag/i })).toBeVisible()
  })

  test('should have proper meta tags for SEO', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/Enjoy Taxi/)

    // Check meta description
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content')
    expect(metaDescription).toContain('elektrische taxi')
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    // Mobile menu button should be visible
    await expect(page.getByRole('button', { name: /toggle navigatiemenu/i })).toBeVisible()

    // Click mobile menu
    await page.getByRole('button', { name: /toggle navigatiemenu/i }).click()

    // Navigation links should now be visible
    await expect(page.getByRole('link', { name: /diensten/i }).first()).toBeVisible()
  })
})

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact form', async ({ page }) => {
    await expect(page.getByLabel(/naam/i)).toBeVisible()
    await expect(page.getByLabel(/e-mail/i)).toBeVisible()
    await expect(page.getByLabel(/telefoonnummer/i)).toBeVisible()
    await expect(page.getByLabel(/bericht/i)).toBeVisible()
  })

  test('should display contact methods', async ({ page }) => {
    await expect(page.getByText('Bel Direct')).toBeVisible()
    await expect(page.getByText('WhatsApp')).toBeVisible()
    await expect(page.getByText('E-mail')).toBeVisible()
  })

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /verstuur aanvraag/i }).click()

    // HTML5 validation should prevent submission
    const nameInput = page.getByLabel(/naam/i)
    const validationMessage = await nameInput.evaluate((el: HTMLInputElement) => el.validationMessage)
    expect(validationMessage).toBeTruthy()
  })
})

test.describe('Location Pages', () => {
  test('should display Den Haag location page correctly', async ({ page }) => {
    await page.goto('/locations/den-haag')

    await expect(page.getByRole('heading', { name: /den haag/i })).toBeVisible()
    await expect(page.getByText('Den Haag e.o.')).toBeVisible()
    await expect(page.getByText(/populaire routes/i)).toBeVisible()
  })

  test('should have correct meta data for location pages', async ({ page }) => {
    await page.goto('/locations/den-haag')

    await expect(page).toHaveTitle(/den haag/i)

    const metaDescription = await page.getAttribute('meta[name="description"]', 'content')
    expect(metaDescription?.toLowerCase()).toContain('den haag')
  })

  test('should navigate between location pages', async ({ page }) => {
    await page.goto('/locations/den-haag')

    // Find link to another location
    await page.getByRole('link', { name: /leiden/i }).first().click()
    await expect(page).toHaveURL('/locations/leiden')
  })
})
