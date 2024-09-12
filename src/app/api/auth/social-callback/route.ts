import { auth } from '@clerk/nextjs/server'
import { type NextRequest, NextResponse } from 'next/server'

import { createSession, signOut } from '@/actions/auth'
import { getRedirectPathAfterSignIn } from '@/helpers'

export async function GET(request: NextRequest) {
  const { userId } = auth()

  if (!userId) await signOut()

  // TODO: request session data from API when it's ready.

  const session = {
    token: 'user_token',
    refreshToken: 'user_refresh_token',
    onboarding: false,
    user: {
      id: userId,
      username: 'user_username',
      name: 'user_fullname',
      profile: 'user_profile',
      avatarUrl: 'user_avatar_url',
    },
  }

  await createSession(JSON.stringify(session))

  const { protocol, host, searchParams } = request.nextUrl

  const redirectUrl = searchParams.get('redirect_url')
  const baseUrl = `${protocol}//${host}`
  const redirectPath = redirectUrl?.replace(baseUrl, '')

  const pathToRedirectAfterSignIn = getRedirectPathAfterSignIn({
    onboarding: session.onboarding,
    redirectPath,
  })

  const fullRedirectUrl = baseUrl.concat(pathToRedirectAfterSignIn)

  return NextResponse.redirect(fullRedirectUrl)
}
