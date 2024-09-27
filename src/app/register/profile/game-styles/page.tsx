import type { Metadata } from 'next'

import { GameStylesForm } from '../_components/forms/game-styles-form'
import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const GAMES_PAGE_TEXTS = texts.GameStyles.GameStylesPage

export const metadata: Metadata = {
  title: GAMES_PAGE_TEXTS.meta.title,
  description: GAMES_PAGE_TEXTS.meta.description,
}

export default function ProfileGamesPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{GAMES_PAGE_TEXTS.title}</Header.Title>
      </Header.Root>

      <GameStylesForm />
    </div>
  )
}
