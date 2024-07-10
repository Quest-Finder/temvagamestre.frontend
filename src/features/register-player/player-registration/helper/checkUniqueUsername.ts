import { api } from '@/lib/api'

export async function checkUniqueUsername(username: string) {
  try {
    const response = await api(`/user/check-username/${username}`)
    return response.status === 200
  } catch (error) {
    return new Error(`Error: ${error}`)
  }
}
