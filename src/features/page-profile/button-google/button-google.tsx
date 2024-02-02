import { Button } from '@/components/ui/button'
import { useGoogleLogin } from './hook/useGoogleLogin'

export default function ButtonLoginGoogle() {
  const { login } = useGoogleLogin()
  return <Button onClick={() => login()}>Sign in with Google 🚀</Button>
}
