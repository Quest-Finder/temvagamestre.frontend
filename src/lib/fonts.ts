import { Inter, Noto_Sans as NotoSans, Raleway } from 'next/font/google'

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

export const notoSans = NotoSans({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['400'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})
