import type { Metadata } from 'next'
import Image from 'next/image'

import badge from '@/assets/badges/destiny.png'
import { NavButton } from '@/components/ui/nav-button'
import { ROUTES } from '@/constants'

import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const SUCCESS_PAGE_TEXTS = texts.SuccessPage

export const metadata: Metadata = {
  title: SUCCESS_PAGE_TEXTS.meta.title,
  description: SUCCESS_PAGE_TEXTS.meta.description,
}

export default function ProfileSuccessPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Image
          src={badge}
          alt=''
          className='mx-auto'
        />
        <Header.Title>{SUCCESS_PAGE_TEXTS.title}</Header.Title>
        <Header.Description>
          🎉 {SUCCESS_PAGE_TEXTS.description}
        </Header.Description>
      </Header.Root>

      <NavButton
        size='lg'
        href={ROUTES.dashboard.overview}
      >
        {SUCCESS_PAGE_TEXTS.button}
      </NavButton>
    </div>
  )
}
