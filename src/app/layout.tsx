import './globals.css'

import { Metadata } from 'next'

import { ThemeToggle } from '@/components/theme-toggle'
import { inter, notoSans, raleway, roboto } from '@/lib/fonts'
import texts from '@/locales/pt-BR.json'

import { Providers } from './providers'

const t = texts.AppLayout

export const metadata: Metadata = {
  title: {
    template: `%s | ${t.meta.title}`,
    default: t.meta.title,
  },
  description: t.meta.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
      className={`${raleway.variable} ${inter.variable} ${roboto.variable} ${notoSans.variable} antialiased`}
    >
      <body>
        <Providers>
          {children}
          <div className='fixed bottom-2 left-2 z-50'>
            <ThemeToggle />
          </div>
        </Providers>
      </body>
    </html>
  )
}
