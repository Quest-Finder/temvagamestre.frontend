'use server'

import { cookies } from 'next/headers'

import { TVM_TOKEN_COOKIE } from '@/constants'

export async function createSession(token: string) {
  // Clear cookie to prevent any conflicts.
  cookies().delete(TVM_TOKEN_COOKIE)

  cookies().set(TVM_TOKEN_COOKIE, token, {
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24h
  })
}
