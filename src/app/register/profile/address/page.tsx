import type { Metadata } from 'next'

import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'

import { AddressForm } from '../_components/forms/address-form'
import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const ADDRESS_PAGE_TEXTS = texts.Address.AddressPage

export const metadata: Metadata = {
  title: ADDRESS_PAGE_TEXTS.meta.title,
  description: ADDRESS_PAGE_TEXTS.meta.description,
}

export default function ProfileAddressPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{ADDRESS_PAGE_TEXTS.title}</Header.Title>
      </Header.Root>

      <AddressForm />

      <NavLink href={ROUTES.register.profile.gameStyles}>
        {ADDRESS_PAGE_TEXTS.skip}
      </NavLink>
    </div>
  )
}
