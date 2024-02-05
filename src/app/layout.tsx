import { Metadata } from 'next'
import { Inter, Roboto, Noto_Sans } from 'next/font/google' // eslint-disable-line camelcase
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '600'],
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
          className={`${inter.variable} ${roboto.variable} ${notoSans.variable}`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
