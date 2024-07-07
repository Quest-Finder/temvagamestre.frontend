import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import { Inter, Noto_Sans as NotoSans, Raleway, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  weight: ['100', '300', '400', '500', '700', '900'],
})
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})
const notoSans = NotoSans({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['100', '300', '400', '500', '700', '900'],
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
          className={`${inter.variable} ${roboto.variable} ${notoSans.variable}  ${raleway.variable}`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
