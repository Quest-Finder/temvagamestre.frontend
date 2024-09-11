import { useSignIn } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import type { OAuthStrategy } from '@/@types'
import { AUTH_ROUTES } from '@/constants'

export function useSignInSocial() {
  const [isAuthenticating, setIsAuthenticating] =
    useState<OAuthStrategy | null>(null)

  const queryParams = useSearchParams()
  const redirectUrl = queryParams.get('redirect_url')
  const { signIn } = useSignIn()

  async function signInWithSocial(strategy: OAuthStrategy): Promise<void> {
    if (!signIn) return

    setIsAuthenticating(strategy)

    const queryParam = redirectUrl ? `?redirect_url=${redirectUrl}` : ''
    const socialCallbackUrl = AUTH_ROUTES.SOCIAL_CALLBACK.concat(queryParam)

    await signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: socialCallbackUrl,
      redirectUrlComplete: socialCallbackUrl,
    })

    setIsAuthenticating(null)
  }

  return {
    isAuthenticating,
    signInWithSocial,
  }
}
