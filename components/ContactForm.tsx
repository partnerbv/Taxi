'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'

const initialState: ContactFormState = {
  success: false,
  message: '',
  errors: {},
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Verzenden...
        </span>
      ) : (
        'Verstuur Aanvraag'
      )}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      {/* Success Message */}
      {state.success && (
        <div className="p-4 bg-accent-50 border border-accent-200 rounded-xl">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-accent-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-accent-700">{state.message}</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {!state.success && state.message && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-700">{state.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
          Naam <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={`input-field ${state.errors?.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Uw volledige naam"
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
        />
        {state.errors?.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`input-field ${state.errors?.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="uw@email.nl"
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
        />
        {state.errors?.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
          Telefoonnummer <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className={`input-field ${state.errors?.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="+31 6 1234 5678"
          aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
        />
        {state.errors?.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {state.errors.phone[0]}
          </p>
        )}
      </div>

      {/* Service Field */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
          Gewenste Dienst
        </label>
        <select
          id="service"
          name="service"
          className="input-field"
        >
          <option value="">Selecteer een dienst</option>
          <option value="luchthaven">Luchthaven Transfer</option>
          <option value="zakelijk">Zakelijk Vervoer</option>
          <option value="evenementen">Evenementen</option>
          <option value="vip">VIP Service</option>
          <option value="anders">Anders</option>
        </select>
      </div>

      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-secondary-700 mb-2">
          Gewenste Datum
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="input-field"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`input-field resize-none ${state.errors?.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Vertel ons meer over uw wensen..."
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* Honeypot field for anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit Button */}
      <SubmitButton />

      <p className="text-sm text-secondary-500 text-center">
        Door dit formulier te versturen gaat u akkoord met onze{' '}
        <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
          privacyverklaring
        </a>
        .
      </p>
    </form>
  )
}
