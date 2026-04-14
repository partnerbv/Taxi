'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

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

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

async function sendEmail(data: {
  name: string
  email: string
  phone: string
  service?: string
  date?: string
  message: string
}) {
  const serviceLabel = data.service || 'Niet opgegeven'
  const dateLabel = data.date || 'Niet opgegeven'

  await transporter.sendMail({
    from: `"Enjoy Taxi Website" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    replyTo: data.email,
    subject: `Nieuwe aanvraag van ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #79ba3a; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nieuwe Taxi Aanvraag</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 140px;">Naam:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">E-mail:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Telefoon:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Dienst:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Datum:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${dateLabel}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <h3 style="margin: 0 0 8px 0; color: #333;">Bericht:</h3>
            <div style="background-color: white; padding: 16px; border-radius: 6px; border: 1px solid #e0e0e0; white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>
        <div style="background-color: #333; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #999; margin: 0; font-size: 12px;">Verstuurd via enjoytaxi.nl contactformulier</p>
        </div>
      </div>
    `,
    text: `Nieuwe aanvraag van ${data.name}\n\nNaam: ${data.name}\nE-mail: ${data.email}\nTelefoon: ${data.phone}\nDienst: ${serviceLabel}\nDatum: ${dateLabel}\n\nBericht:\n${data.message}`,
  })
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const clientId = 'client-' + (formData.get('email') || 'unknown')

  if (!checkRateLimit(clientId)) {
    return {
      success: false,
      message: 'U heeft te veel aanvragen verstuurd. Probeer het later opnieuw.',
    }
  }

  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    date: formData.get('date') as string,
    message: formData.get('message') as string,
    website: formData.get('website') as string,
  }

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

  if (rawData.website) {
    return {
      success: true,
      message: 'Bedankt voor uw aanvraag! Wij nemen zo snel mogelijk contact met u op.',
    }
  }

  try {
    await sendEmail(validationResult.data)

    return {
      success: true,
      message: 'Bedankt voor uw aanvraag! Wij nemen binnen 24 uur contact met u op.',
    }
  } catch {
    return {
      success: false,
      message: 'Er is een fout opgetreden bij het versturen. Bel ons direct op 06 2017 2767.',
    }
  }
}
