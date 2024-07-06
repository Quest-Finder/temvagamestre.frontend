export function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
