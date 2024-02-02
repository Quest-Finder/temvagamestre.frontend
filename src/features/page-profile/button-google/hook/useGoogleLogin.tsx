import { useGoogleLogin as useGoogle } from '@react-oauth/google'
import { useSendTokenToBackend } from '../../calendar/js/sendTokenToBackend'
export function useGoogleLogin() {
  const { sendTokenToBackend } = useSendTokenToBackend()
  const login = useGoogle({
    onSuccess: async tokenResponse => {
      await sendTokenToBackend(tokenResponse.access_token)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    },
  })
  return { login }
}
