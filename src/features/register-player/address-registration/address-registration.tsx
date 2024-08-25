'use client'

import { FormProvider } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { RegisterRoutes } from '@/services/routers'

import FormText from '../FormText.json'
import { FormTitle } from '../utils/title-form'
import InputLiveInBrazil from './components/input-checkbox-live-in-brazil'
import InputCity from './components/input-city'
import InputState from './components/input-state'
import useFormAddressRegistration from './hooks/useFormAddressRegistration'
import useSubmitFormAddressRegistration from './service/submitFormAddressRegistration'

export default function FormAddressRegistration() {
  const { form } = useFormAddressRegistration()
  return (
    <FormProvider {...form}>
      <FormTitle>{FormText.addressRegistration.title}</FormTitle>
      <form
        onSubmit={form.handleSubmit(
          useSubmitFormAddressRegistration(form, RegisterRoutes.StylesPlay),
        )}
        className='mx-auto flex min-h-[31.25rem] w-full max-w-[23.1875rem] flex-col items-center justify-between'
      >
        <div className='flex w-full flex-col gap-2'>
          <InputState />
          <InputCity />
        </div>

        <div className='flex w-full flex-col gap-8'>
          <InputLiveInBrazil />
          <div className='flex flex-col items-center gap-8'>
            <Button
              type='submit'
              size='lg'
            >
              Salvar e Continuar
            </Button>
            <p className='text-center text-sm font-normal leading-5 text-neutral-500'>
              Prefiro responder em outro momento
            </p>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
