import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template Next App',
  description: 'Template Nyx',
}

export default function RootLayout({
  children,
  pageProps
}: {
  children: React.ReactNode
  pageProps : AppProps
}) {
  return (
    <html lang='pt-Br'>
      <ClerkProvider localization={ptBR} 
      
      >
        <body className={inter.className}>{children}</body>
      </ClerkProvider>    
    </html>
  )
}
