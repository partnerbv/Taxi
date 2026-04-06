'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-8xl font-bold text-white mb-4">Oeps</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Er is iets misgegaan
          </h1>
          <p className="text-white/80 mb-8">
            Onze excuses voor het ongemak. Er is een onverwachte fout opgetreden.
            Probeer het opnieuw of ga terug naar de homepage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="btn-white w-full sm:w-auto"
            >
              Opnieuw proberen
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/50 rounded-full transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
            >
              Naar Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
