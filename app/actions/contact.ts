'use server'

import { z } from 'zod'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // Max submissions per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

export interface ContactFormState {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
  }
}

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Naam moet minimaal 2 tekens bevatten')
    .max(100, 'Naam mag maximaal 100 tekens bevatten'),
  email: z
    .string()
    .email('Voer een geldig e-mailadres in'),
  phone: z
    .string()
    .min(10, 'Voer een geldig telefoonnummer in')
    .regex(/^[+\d\s()-]+$/, 'Telefoonnummer bevat ongeldige tekens'),
  service: z.string().optional(),
  date: z.string().optional(),
  message: z
    .string()
    .min(10, 'Bericht moet minimaal 10 tekens bevatten')
    .max(2000, 'Bericht mag maximaal 2000 tekens bevatten'),
  website: z.string().max(0, 'Spam gedetecteerd'), // Honeypot field
})

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate a client identifier (in production, use IP or session)
  const clientId = 'client-' + (formData.get('email') || 'unknown')

  // Check rate limit
  if (!checkRateLimit(clientId)) {
    return {
      success: false,
      message: 'U heeft te veel aanvragen verstuurd. Probeer het later opnieuw.',
    }
  }

  // Extract form data
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    date: formData.get('date') as string,
    message: formData.get('message') as string,
    website: formData.get('website') as string, // Honeypot
  }

  // Validate with Zod
  const validationResult = contactSchema.safeParse(rawData)

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors
    return {
      success: false,
      message: 'Controleer de gemarkeerde velden.',
      errors: {
        name: errors.name,
        email: errors.email,
        phone: errors.phone,
        message: errors.message,
      },
    }
  }

  // If honeypot field is filled, silently reject (spam)
  if (rawData.website) {
    // Pretend success to fool spammers
    return {
      success: true,
      message: 'Bedankt voor uw aanvraag! Wij nemen zo snel mogelijk contact met u op.',
    }
  }

  try {
    // In production, here you would:
    // 1. Send email notification
    // 2. Store in database
    // 3. Send to CRM
    // 4. etc.

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // TODO: In production, send email notification, store in database, send to CRM, etc.

    return {
      success: true,
      message: 'Bedankt voor uw aanvraag! Wij nemen binnen 24 uur contact met u op.',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Er is een fout opgetreden. Probeer het later opnieuw of bel ons direct.',
    }
  }
}
