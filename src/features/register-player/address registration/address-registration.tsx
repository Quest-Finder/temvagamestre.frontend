'use client'

import { Button } from '@/components/ui/button'
import { RegisterRoutes } from '@/services/routers'
import { FormProvider } from 'react-hook-form'
import ButtonNextPage from '../utils/button-next-page'
import { FormTitle } from '../utils/title-form'
import { CheckboxLiveAbroad } from './components/ checkbox-live-abroad'
import InputCity from './components/input-city'
import InputState from './components/input-state'
import useFormAddressRegistration from './hooks/useFormAddressRegistration'
import useSubmitFormAddressRegistration from './service/submitFormAddressRegistration'
import * as FormText from '../FormText.json'

export default function FormAddressRegistration() {
  const { form, onSubmit } = useFormAddressRegistration()

  const isDisable = !form.formState.isValid
  return (
    <FormProvider {...form}>
      <FormTitle>{FormText.addressRegistration.title}</FormTitle>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto flex  min-h-[31.25rem] w-full max-w-[23.1875rem] flex-col items-center justify-between'
      >
        <div className='flex w-full flex-col items-center justify-center gap-2'>
          <InputState />
          <div className='flex w-full max-w-[340px] flex-col items-center justify-center gap-2'>
            <InputCity />
          </div>
        </div>

        <div className=' flex w-full flex-col gap-8'>
          <CheckboxLiveAbroad />
          <div className='flex flex-col items-center gap-8'>
            <Button
              type='submit'
              className=' min-h-[3.5rem] w-full min-w-[6.25rem] max-w-[13.375rem] flex-wrap px-8 py-4'
              disabled={isDisable}
            >
              Salvar e Continuar
              {/* <ArrowLeft /> */}
            </Button>
            <ButtonNextPage path={RegisterRoutes.StylesPlay} />
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
