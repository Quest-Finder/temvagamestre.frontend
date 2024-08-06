'use client'

import { MultiStepRegisterForm } from '@/hooks/useMultiStep'

import ButtonBack from '../utils/button-back'

interface FormlayoutProps {
  children: React.ReactNode
}

export function FormLayout({ children }: FormlayoutProps) {
  return (
    <main className='space-y-8 sm:m-10'>
      <div className='mx-auto max-w-[880px]'>
        <ButtonBack />
      </div>
      <MultiStepRegisterForm />
      {children}
    </main>
  )
}
