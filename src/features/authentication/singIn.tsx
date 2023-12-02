import { SignIn } from '@clerk/nextjs'

const themeSingUp = {
  socialButtons: 'flex flex-col',
  dividerText: 'hidden',
  header: 'flex items-center',
  footer: 'hidden',
}
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
