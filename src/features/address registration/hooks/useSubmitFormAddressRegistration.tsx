import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { addressRegistrationValidationT } from '../types/address-registration'
import uselocalStorageSetItem from './uselocalStorageSetItem'

export default function useSubmitFormAddressRegistration(
  form: UseFormReturn<addressRegistrationValidationT>,
  navigateToPlayerProfileUrl: string,
) {
  const router = useRouter()

  return useCallback(
    (values: addressRegistrationValidationT) => {
      if (values.liveInBrazil === false && values.state === '') {
        form.setError('state', {
          type: 'manual',
          message: 'Campo obrigatório',
        })
        return
      }
      if (values.liveInBrazil === false && values.city === '') {
        form.setError('city', {
          type: 'manual',
          message: 'Campo obrigatório',
        })
        return
      }
      uselocalStorageSetItem('form_data_adress', values)
      router.push(navigateToPlayerProfileUrl)
    },
    [navigateToPlayerProfileUrl, form, router],
  )
}
