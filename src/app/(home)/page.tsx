// import { SignOutButton } from '@clerk/nextjs'

import { SignOutButton } from '@/components/sign-out-button'
import { NavButton } from '@/components/ui/nav-button'
import { AUTH_ROUTES, REGISTER_PLAYER_ROUTES } from '@/constants/routes'
import { PublicRoutes } from '@/services/routers'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center gap-3'>
        <NavButton href={AUTH_ROUTES.SIGN_IN}>sign-in</NavButton>
        <NavButton href={AUTH_ROUTES.SIGN_UP}>sign-up</NavButton>

        <NavButton href={REGISTER_PLAYER_ROUTES.ONBOARDING}>
          onboarding
        </NavButton>

        <NavButton href={REGISTER_PLAYER_ROUTES.PLAYER}>
          register player profile
        </NavButton>
        <NavButton href={PublicRoutes.PlayerProfile}>player profile</NavButton>

        <SignOutButton className='mt-8' />
      </div>
    </main>
  )
}
