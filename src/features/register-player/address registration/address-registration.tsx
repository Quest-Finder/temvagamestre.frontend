'use client'

import { RegisterRoutes } from '@/services/routers'
import { FormProvider } from 'react-hook-form'
import { FormTitle } from '../utils/title-form'
import { FormFields } from './components/form-fields'
import { SubmitSection } from './components/submit-section'
import useFormAddressRegistration from './hooks/useFormAddressRegistration'
import useSubmitFormAddressRegistration from './service/submitFormAddressRegistration'

export default function FormAddressRegistration() {
  const { form } = useFormAddressRegistration()
  return (
    <FormProvider {...form}>
      <FormTitle>Conte-nos de onde você é</FormTitle>
      <form
        onSubmit={form.handleSubmit(
          useSubmitFormAddressRegistration(form, RegisterRoutes.StylesPlay),
        )}
        className='mx-auto flex  min-h-[31.25rem] w-full max-w-[23.1875rem] flex-col items-center justify-between'
      >
        <FormFields />
        <div>
          <SubmitSection />
        </div>
      </form>
    </FormProvider>
  )
}
