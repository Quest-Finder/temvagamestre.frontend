import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tem Vaga Mestre',
  description: 'Gerencie seus personagens e campanhas de rpg de maneira simples, rápida e eficiente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-Br'>
      <ClerkProvider localization={ptBR}>
        <body className={inter.className}>{children}</body>
      </ClerkProvider>    
    </html>
  )
}
