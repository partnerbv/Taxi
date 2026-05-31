import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the hero section with correct headline', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Taxi Den Haag/i })).toBeVisible()
  })

  test('should navigate to the locations page', async ({ page }) => {
    await page.getByRole('link', { name: /^locaties$/i }).first().click()
    await expect(page).toHaveURL('/locaties')
  })

  test('should have working phone CTA link', async ({ page }) => {
    const phoneLink = page.getByRole('link', { name: /bel/i }).first()
    await expect(phoneLink).toHaveAttribute('href', 'tel:+31620172767')
  })

  test('should have working WhatsApp CTA link', async ({ page }) => {
    const whatsappLink = page.getByRole('link', { name: /whatsapp/i }).first()
    const href = await whatsappLink.getAttribute('href')
    expect(href).toContain('wa.me/31620172767')
  })

  test('should display services section', async ({ page }) => {
    await expect(page.getByText('Onze Diensten')).toBeVisible()
    await expect(page.getByText('Luchthavenvervoer')).toBeVisible()
    await expect(page.getByText('Zakelijk Vervoer')).toBeVisible()
  })

  test('should display reviews section', async ({ page }) => {
    await expect(page.getByText(/Wat Onze Klanten/i)).toBeVisible()
  })

  test('should display locations section', async ({ page }) => {
    await expect(page.getByText(/Den Haag, Leiden/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /taxi den haag/i }).first()).toBeVisible()
  })

  test('should have proper meta tags for SEO', async ({ page }) => {
    await expect(page).toHaveTitle(/Enjoy Taxi/)

    const metaDescription = await page.getAttribute('meta[name="description"]', 'content')
    expect(metaDescription).toContain('vaste prijzen')
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    const menuButton = page.getByRole('button', { name: /menu openen/i })
    await expect(menuButton).toBeVisible()

    await menuButton.click()

    await expect(page.getByRole('link', { name: /^tarieven$/i }).first()).toBeVisible()
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
})

test.describe('Location Pages', () => {
  test('should display Den Haag location page correctly', async ({ page }) => {
    await page.goto('/taxi-den-haag')

    await expect(page.getByRole('heading', { name: /den haag/i }).first()).toBeVisible()
    await expect(page.getByText(/Veelgestelde Vragen/i)).toBeVisible()
  })

  test('should have correct meta data for location pages', async ({ page }) => {
    await page.goto('/taxi-den-haag')

    await expect(page).toHaveTitle(/den haag/i)

    const metaDescription = await page.getAttribute('meta[name="description"]', 'content')
    expect(metaDescription?.toLowerCase()).toContain('den haag')
  })

  test('should navigate between location pages', async ({ page }) => {
    await page.goto('/taxi-den-haag')

    await page.getByRole('link', { name: /leiden/i }).first().click()
    await expect(page).toHaveURL('/taxi-leiden')
  })
})
