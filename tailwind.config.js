/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY - Enjoy Taxi Blauw (Vertrouwen, Professioneel, Rust)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // HOOFD BLAUW
          600: '#2563eb', // Donkerder blauw - CTA's
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // ACCENT - Navy/Slate (Luxe, Premium, Donkere secties)
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // SECONDARY - alias van navy (backwards-compat oudere pagina's)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // GOUD - Voor sterren, awards, premium badges
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // SUCCESS/TRUST kleuren
        success: {
          500: '#22c55e',
          600: '#16a34a',
        },
        trust: {
          green: '#16a34a',
          blue: '#0369a1',
        },
        luxury: {
          cream: '#f5f9ff',
          white: '#ffffff',
          dark: '#0c1222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Luxe schaduwen
        'luxury': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'luxury-lg': '0 10px 40px -3px rgba(0, 0, 0, 0.12), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'luxury-xl': '0 20px 50px -5px rgba(0, 0, 0, 0.15), 0 8px 20px -6px rgba(0, 0, 0, 0.1)',
        // Blauw glow effecten
        'blue': '0 4px 20px -2px rgba(37, 99, 235, 0.25)',
        'blue-lg': '0 10px 40px -3px rgba(37, 99, 235, 0.35)',
        'blue-xl': '0 20px 50px -5px rgba(37, 99, 235, 0.4)',
        // Legacy aliassen
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'primary': '0 4px 20px -2px rgba(37, 99, 235, 0.25)',
        'primary-lg': '0 10px 40px -5px rgba(37, 99, 235, 0.3)',
      },
      backgroundImage: {
        // Premium gradients (blauw)
        'gradient-blue': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-blue-warm': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0c1222 0%, #0f172a 100%)',
        'gradient-light': 'linear-gradient(180deg, #f5f9ff 0%, #ffffff 100%)',
        // Hero gradient - navy
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1e293b 100%)',
        // Legacy aliassen
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        'gradient-card': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
