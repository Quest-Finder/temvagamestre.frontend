import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        xs: '480px',
        tablet: '860px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-raleway)',
        notoSans: ['var(--font-notoSans)'],
      },
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
          soft: 'hsl(var(--background-soft))',
          disabled: 'hsl(var(--background-disabled))',
          hard: 'hsl(var(--background-hard))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          support: 'hsl(var(--foreground-support))',
          soft: 'hsl(var(--foreground-soft))',
          hard: 'hsl(var(--foreground-hard))',
          accent: 'hsl(var(--foreground-accent))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          soft: 'hsl(var(--primary-soft))',
          hard: 'hsl(var(--primary-hard))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          soft: 'hsl(var(--secondary-soft))',
          hard: 'hsl(var(--secondary-hard))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        player: {
          DEFAULT: 'hsl(var(--player))',
          soft: 'hsl(var(--player-soft))',
          hard: 'hsl(var(--player-hard))',
        },
        master: {
          DEFAULT: 'hsl(var(--master))',
          soft: 'hsl(var(--master-soft))',
          hard: 'hsl(var(--master-hard))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          soft: 'hsl(var(--warning-soft))',
          hard: 'hsl(var(--warning-hard))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          soft: 'hsl(var(--info-soft))',
          hard: 'hsl(var(--info-hard))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          soft: 'hsl(var(--error-soft))',
          hard: 'hsl(var(--error-hard))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          soft: 'hsl(var(--success-soft))',
          hard: 'hsl(var(--success-hard))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          hard: 'hsl(var(--border-hard))',
        },
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
