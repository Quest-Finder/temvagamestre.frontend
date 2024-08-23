import { Inter, Raleway } from 'next/font/google'

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})
