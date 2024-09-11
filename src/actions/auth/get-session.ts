'use server'

import { cookies } from 'next/headers'

import type { Session } from '@/@types'
import { TVM_TOKEN_COOKIE } from '@/constants'

export async function getSession(): Promise<Session | null> {
  const token = cookies().get(TVM_TOKEN_COOKIE)?.value

  if (!token) return null

  const session = JSON.parse(token)

  return session
}
