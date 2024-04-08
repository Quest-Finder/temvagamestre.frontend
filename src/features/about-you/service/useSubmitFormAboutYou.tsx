import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { TValidation } from '../types/validation'

export default function useSubmitFormAboutYouRegistration(
  form: UseFormReturn<TValidation>,
  pathUrl: string,
) {
  const router = useRouter()

  return useCallback(
    (values: TValidation) => {
      //   uselocalStorageSetItem('form_data_adress', values)
      console.table(values)
      router.push(pathUrl)
    },
    [pathUrl, router],
  )
}
