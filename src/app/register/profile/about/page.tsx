import type { Metadata } from 'next'

import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'

import { AboutForm } from '../_components/forms/about-form'
import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const ABOUT_PAGE_TEXTS = texts.About.AboutPage

export const metadata: Metadata = {
  title: ABOUT_PAGE_TEXTS.meta.title,
  description: ABOUT_PAGE_TEXTS.meta.description,
}

export default function ProfileAboutPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{ABOUT_PAGE_TEXTS.title}</Header.Title>
      </Header.Root>

      <AboutForm />

      <NavLink href={ROUTES.register.profile.address}>
        {ABOUT_PAGE_TEXTS.skip}
      </NavLink>
    </div>
  )
}
