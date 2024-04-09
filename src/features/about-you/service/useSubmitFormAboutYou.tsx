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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (values: TValidation) => {
      //   uselocalStorageSetItem('form_data_adress', values)
      router.push(pathUrl)
    },
    [pathUrl, router],
  )
}
