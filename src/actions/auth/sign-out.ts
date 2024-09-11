'use server'

import { clerkClient } from '@clerk/clerk-sdk-node'
import { auth } from '@clerk/nextjs/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AUTH_ROUTES, TVM_TOKEN_COOKIE } from '@/constants'

export async function signOut() {
  const { sessionId } = auth()

  if (sessionId) {
    await clerkClient.sessions.revokeSession(sessionId)
  }

  cookies().delete(TVM_TOKEN_COOKIE)

  redirect(AUTH_ROUTES.SIGN_IN)
}
