'use client'

import { MultiStepRegisterForm } from '@/hooks/useMultiStep'

import ButtonBack from '../utils/button-back'

interface FormlayoutProps {
  children: React.ReactNode
}

export function FormLayout({ children }: FormlayoutProps) {
  return (
    <main className='bg-primary-50 flex h-full justify-center'>
      <div className='m-6 w-full max-w-[75.313rem] space-y-8 bg-neutral-50 p-3 sm:m-24 sm:p-10'>
        <ButtonBack />
        <MultiStepRegisterForm />
        {children}
      </div>
    </main>
  )
}
