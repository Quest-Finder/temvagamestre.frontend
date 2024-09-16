'use server'

import { getSession } from './get-session'

export async function isAuthenticated() {
  const session = await getSession()

  if (!session?.user.id) return false

  return true
}
