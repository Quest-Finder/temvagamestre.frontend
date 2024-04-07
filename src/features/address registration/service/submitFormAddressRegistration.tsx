import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'
import uselocalStorageSetItem from '../hooks/uselocalStorageSetItem'
import { addressRegistrationValidationT } from '../types/address-registration'
import SetErrorInFieldValue from './SetErrorInFieldValue'

export default function useSubmitFormAddressRegistration(
  form: UseFormReturn<addressRegistrationValidationT>,
  navigateToPlayerProfileUrl: string,
) {
  const router = useRouter()

  return useCallback(
    (values: addressRegistrationValidationT) => {
      SetErrorInFieldValue(form, values, 'state')
      SetErrorInFieldValue(form, values, 'city')
      uselocalStorageSetItem('form_data_adress', values)
      router.push(navigateToPlayerProfileUrl)
    },
    [navigateToPlayerProfileUrl, form, router],
  )
}
