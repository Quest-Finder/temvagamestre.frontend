import { SignIn } from '@clerk/nextjs'

export default function SingIn() {
  return (
    <SignIn
      path='/sign-in'
      appearance={{
        elements: {
          socialButtons: 'flex flex-col',
          dividerText: 'hidden',
          header: 'flex items-center',
          form: 'hidden',
          footer: 'hidden',
        },
      }}
    />
  )
}
