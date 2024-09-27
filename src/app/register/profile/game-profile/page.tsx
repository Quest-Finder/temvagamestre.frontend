import type { Metadata } from 'next'

import { GameProfileForm } from '../_components/forms/game-profile-form'
import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const GAME_PROFILE_PAGE_TEXTS = texts.GameProfile.GameProfilePage

export const metadata: Metadata = {
  title: GAME_PROFILE_PAGE_TEXTS.meta.title,
  description: GAME_PROFILE_PAGE_TEXTS.meta.description,
}

export default function GameProfilePage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{GAME_PROFILE_PAGE_TEXTS.title}</Header.Title>
      </Header.Root>

      <GameProfileForm />
    </div>
  )
}
