'use client'

import { Button } from '@/components/ui/button'
import { ButtonSkipForm } from '@/components/ui/button-skip-form'
import { RegisterRoutes } from '@/services/routers'
import { FormProvider } from 'react-hook-form'
import * as FormText from '../FormText.json'
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
        className='mx-auto flex  min-h-[31.25rem] w-full max-w-[23.1875rem] flex-col items-center justify-between'
      >
        <div className='flex w-full flex-col gap-2'>
          <InputState />
          <InputCity />
        </div>

        <div className=' flex w-full flex-col gap-8'>
          <InputLiveInBrazil />
          <div className='flex flex-col items-center gap-8'>
            <Button
              type='submit'
              className=' min-h-[3.5rem] w-full min-w-[6.25rem] max-w-[13.375rem] flex-wrap px-8 py-4'
            >
              Salvar e Continuar
            </Button>
            <ButtonSkipForm
              content='Não responder nesse momento'
              href={RegisterRoutes.StylesPlay}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
