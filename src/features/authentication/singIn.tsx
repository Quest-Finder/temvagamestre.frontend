import { RegisterRoutes } from '@/services/routers'
import { SignIn } from '@clerk/nextjs'

export default function SingIn() {
  return (
    <SignIn
      path='/sign-in'
      redirectUrl={RegisterRoutes.PlayerData}
      appearance={{
        elements: {
          socialButtons: 'flex flex-col',
          dividerText: 'hidden',
          header: 'flex items-center',
          footer: 'hidden',
          footerActionText: 'hidden',
          footerActionLink: 'hidden',
        },
      }}
    />
  )
}
