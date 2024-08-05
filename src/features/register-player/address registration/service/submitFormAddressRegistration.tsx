import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'

import uselocalStorageSetItem from '../hooks/uselocalStorageSetItem'
import { addressRegistrationValidationT } from '../types/address-registration'
import GetCityByEstate from './get-city-by-estate'
import SetErrorInFieldValue from './SetErrorInFieldValue'

export default function useSubmitFormAddressRegistration(
  form: UseFormReturn<addressRegistrationValidationT>,
  url: string,
) {
  const router = useRouter()
  const uf = form.getValues('state')
  const { isCityInList } = GetCityByEstate({ uf })

  return useCallback(
    (values: addressRegistrationValidationT) => {
      SetErrorInFieldValue(form, values, 'state')
      SetErrorInFieldValue(form, values, 'city')
      uselocalStorageSetItem('form_data_adress', values)
      const cityInList = isCityInList(form.getValues('city'))
      if (!cityInList) {
        return
      }
      router.push(url)
    },
    [form, url, router, isCityInList],
  )
}
