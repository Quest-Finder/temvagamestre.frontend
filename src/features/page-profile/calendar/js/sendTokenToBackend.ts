export function useSendTokenToBackend() {
  async function sendTokenToBackend(token: string) {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {},
        body: JSON.stringify({ token }),
      })
      return await response.json()
    } catch (error) {
      return error
    }
  }
  return { sendTokenToBackend }
}
