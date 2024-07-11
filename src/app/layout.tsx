import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import { Inter, Noto_Sans as NotoSans, Raleway, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400'],
})
const notoSans = NotoSans({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['400'],
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '600',
    '700',
    '800',
    '900',
  ],
  style: ['italic', 'normal'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Tem Vaga Mestre',
  description:
    'Gerencie seus personagens e campanhas de rpg de maneira simples, rápida e eficiente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-Br'>
      <ClerkProvider localization={ptBR}>
        <body
          className={`${inter.variable} ${roboto.variable} ${notoSans.variable} ${raleway.variable}`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
