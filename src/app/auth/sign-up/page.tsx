import type { Metadata } from 'next'
import Image from 'next/image'

import logo from '@/assets/branding/logo-short.svg'
import signUpImage from '@/assets/images/sign-up-image.jpg'
import { NavLink } from '@/components/ui/nav-link'
import { PatternOverlay } from '@/components/ui/pattern-overlay'
import { PUBLIC_ROUTES } from '@/constants/routes'

import { SignUpForm } from './_components/sign-up-form'
import texts from './locales/pt-BR.json'

const SIGN_UP_TEXTS = texts.SignUpPage

export const metadata: Metadata = {
  title: SIGN_UP_TEXTS.meta.title,
  description: SIGN_UP_TEXTS.meta.description,
}

export default function SignUpPage() {
  return (
    <div className='relative flex min-h-svh items-center justify-center bg-player-hard p-4 sm:p-16'>
      <PatternOverlay />
      <div className='z-10 flex w-full max-w-6xl overflow-hidden rounded-4xl max-md:flex-col'>
        <div className='bg-primary max-md:h-96 max-sm:h-48 md:flex-1'>
          <Image
            src={signUpImage}
            alt={SIGN_UP_TEXTS.imageAlt}
            className='size-full object-cover'
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
              {SIGN_UP_TEXTS.hasAccount}{' '}
              <NavLink href={PUBLIC_ROUTES.SIGN_IN}>
                {SIGN_UP_TEXTS.signInLink}
              </NavLink>
            </div>
          </header>

          <h1 className='text-3xl font-bold text-foreground-hard max-sm:text-center'>
            {SIGN_UP_TEXTS.title}
          </h1>

          <SignUpForm />
        </main>
      </div>
    </div>
  )
}
