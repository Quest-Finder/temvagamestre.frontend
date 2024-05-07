'use client'

import { FormLayout } from '@/features/register-player/player-registration/FormStep1/FormLayout'
import { PublicRoutes } from '@/services/routers'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { user } = useUser()

  const userRegistration = false
  if (!user) {
    // usuario não fez login no clerk
    return redirect(PublicRoutes.SignIn)
  }
  // aqui vai verificar se o usuario esta cadastrado no nosso DB

  if (user && userRegistration) {
    // usuario autenticado e registrado no nosso DB
    return redirect(PublicRoutes.PlayerProfile)
  }
  return <FormLayout>{children}</FormLayout>
}
