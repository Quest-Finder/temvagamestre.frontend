import { SignIn } from '@clerk/nextjs'
import { themeSingUp } from './theme'

export default function SingIn() {
  return (
    <SignIn
      appearance={{
        elements: {
          ...themeSingUp,
        },
      }}
    />
  )
}
