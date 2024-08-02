import { Button } from '@/components/ui/button'
import ButtonNavigation from '@/hooks/ButtonNavigation'
import { PublicRoutes, RegisterRoutes } from '@/services/routers'
import { SignOutButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-3'>
        <ButtonNavigation
          href={PublicRoutes.SignIn}
          content='sign-in'
        />
        <ButtonNavigation
          href={PublicRoutes.PlayerProfile}
          content='perfil do jogador'
        />
        <ButtonNavigation
          href={RegisterRoutes.PlayerData}
          content='Cadastro do jogador'
        />
        <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
      </div>
    </main>
  )
}
