import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { RegisterRoutes } from '@/services/routers'

import { addressRegistrationValidationT } from '../types/address-registration'
import { addressRegistrationValidation } from '../utils/address-registration-validation'
import { DEFAULT_VALEUS_ADDRESS_REGISTRATION } from '../utils/defaul-values'
import useLocalStorageGetItem from './useLocalStorageGetItem'
import uselocalStorageSetItem from './uselocalStorageSetItem'

export default function useFormAddressRegistration() {
  const keyLocalStorage = 'form_step_four'
  const parsedData =
    useLocalStorageGetItem<addressRegistrationValidationT>(keyLocalStorage)
  const form = useForm<addressRegistrationValidationT>({
    resolver: zodResolver(addressRegistrationValidation),
    defaultValues: parsedData || DEFAULT_VALEUS_ADDRESS_REGISTRATION,
    mode: 'all',
  })
  const router = useRouter()
  function onSubmit(values: addressRegistrationValidationT) {
    uselocalStorageSetItem(keyLocalStorage, values)
    router.push(RegisterRoutes.StylesPlay)
  }

  return { form, onSubmit }
}
