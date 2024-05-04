'use client'

import { FormGameStyles } from '@/features/register-player/game-styles/FormGameStyles'
import useSubmitFormRegister from '@/features/register-player/utils/submitFormRegister'
import ButtonNavigation from '@/hooks/ButtonNavigation'
import { RegisterRoutes } from '@/services/routers'

export default function PagesStylesPlay() {
  return (
    <>
      <FormGameStyles />
      <ButtonNavigation
        href={RegisterRoutes.Sucess}
        content='sucesso'
        onClick={useSubmitFormRegister}
      />
    </>
  )
}
