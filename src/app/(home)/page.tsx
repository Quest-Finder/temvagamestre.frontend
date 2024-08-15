import { AUTH_ROUTES } from '@/constants/routes'
import ButtonNavigation from '@/hooks/ButtonNavigation'
import { PublicRoutes, RegisterRoutes } from '@/services/routers'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center gap-3'>
        <ButtonNavigation
          href={AUTH_ROUTES.SIGN_UP}
          content='sign-up'
        />
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
      </div>
    </main>
  )
}
