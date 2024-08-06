import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'

import uselocalStorageSetItem from '../../address registration/hooks/uselocalStorageSetItem'
import { TValidation } from '../types/validation'

export default function useSubmitFormAboutYouRegistration(
  form: UseFormReturn<TValidation>,
  pathUrl: string,
) {
  const router = useRouter()

  return useCallback(
    (values: TValidation) => {
      uselocalStorageSetItem('form_data_about_you', values)
      router.push(pathUrl)
    },
    [pathUrl, router],
  )
}
