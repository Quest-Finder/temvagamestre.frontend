'use client'

import useSubmitFormRegister from '@/features/register-player/utils/submitFormRegister'
import ButtonNavigation from '@/hooks/ButtonNavigation'
import { RegisterRoutes } from '@/services/routers'

import { FormPlayerProfile } from '@/features/register-player/player-profile/FormPlayerProfile'

export default function PagesPlayerProfile() {
  return (
    <>
      <FormPlayerProfile />
      <ButtonNavigation
        href={RegisterRoutes.Sucess}
        content='sucesso'
        onClick={useSubmitFormRegister}
      />
    </>
  )
}
