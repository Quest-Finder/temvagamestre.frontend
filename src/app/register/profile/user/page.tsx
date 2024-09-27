import type { Metadata } from 'next'

import { UserForm } from '../_components/forms/user-form'
import { Header } from '../_components/header'
import texts from '../_locales/pt-BR.json'

const USER_PAGE_TEXTS = texts.User.UserPage

export const metadata: Metadata = {
  title: USER_PAGE_TEXTS.meta.title,
  description: USER_PAGE_TEXTS.meta.description,
}

export default function ProfileUserPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{USER_PAGE_TEXTS.title}</Header.Title>
      </Header.Root>

      <UserForm />
    </div>
  )
}
