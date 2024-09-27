import type { Metadata } from 'next'

import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'

import { SocialForm } from '../_components/forms/social-form'
import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const SOCIAL_PAGE_TEXTS = texts.Social.SocialPage

export const metadata: Metadata = {
  title: SOCIAL_PAGE_TEXTS.meta.title,
  description: SOCIAL_PAGE_TEXTS.meta.description,
}

export default function ProfileSocialPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{SOCIAL_PAGE_TEXTS.title}</Header.Title>
      </Header.Root>

      <SocialForm />

      <NavLink href={ROUTES.register.profile.about}>
        {SOCIAL_PAGE_TEXTS.skip}
      </NavLink>
    </div>
  )
}
