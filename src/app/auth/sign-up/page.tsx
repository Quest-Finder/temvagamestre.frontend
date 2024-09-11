import type { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/actions/auth'
import logo from '@/assets/branding/logo-short.svg'
import signUpImage from '@/assets/images/sign-up-image.jpg'
import { NavLink } from '@/components/ui/nav-link'
import { PatternOverlay } from '@/components/ui/pattern-overlay'
import { AUTH_ROUTES } from '@/constants/routes'

import { SignUpForm } from './_components/sign-up-form'
import texts from './locales/pt-BR.json'

const SIGN_UP_PAGE_TEXTS = texts.SignUpPage

export const metadata: Metadata = {
  title: SIGN_UP_PAGE_TEXTS.meta.title,
  description: SIGN_UP_PAGE_TEXTS.meta.description,
}

export default async function SignUpPage() {
  if (await isAuthenticated()) {
    redirect('/')
  }

  return (
    <div className='relative flex min-h-svh items-center justify-center bg-player-hard p-4 sm:p-16'>
      <PatternOverlay />
      <div className='z-10 flex w-full max-w-6xl overflow-hidden rounded-4xl max-md:flex-col'>
        <div className='relative overflow-hidden bg-primary max-md:h-96 max-sm:h-48 md:flex-1'>
          <Image
            src={signUpImage}
            alt={SIGN_UP_PAGE_TEXTS.imageAlt}
            className='absolute size-full object-cover'
            placeholder='blur'
            priority
          />
        </div>
        <main className='w-full space-y-8 bg-background p-8 xs:p-12 md:max-w-[27rem] lg:max-w-lg'>
          <header className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 max-xs:justify-center'>
            <Image
              src={logo}
              alt='Tem Vaga Mestre?'
              className='w-28'
            />
            <div className='text-sm'>
              {SIGN_UP_PAGE_TEXTS.hasAccount}{' '}
              <NavLink href={AUTH_ROUTES.SIGN_IN}>
                {SIGN_UP_PAGE_TEXTS.signInLink}
              </NavLink>
            </div>
          </header>

          <h1 className='text-center text-3xl font-bold text-foreground-hard max-sm:text-center'>
            {SIGN_UP_PAGE_TEXTS.title}
          </h1>

          <SignUpForm />
        </main>
      </div>
    </div>
  )
}
