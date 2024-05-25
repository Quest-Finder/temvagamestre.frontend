import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { addressRegistrationValidationT } from '../types/address-registration'
import { addressRegistrationValidation } from '../utils/address-registration-validation'
import { DEFAULT_VALEUS_ADDRESS_REGISTRATION } from '../utils/defaul-values'

export default function useFormAddressRegistration() {
  // const parsedData =
  //   useLocalStorageGetItem<addressRegistrationValidationT>('form_data_adress')
  const form = useForm<addressRegistrationValidationT>({
    resolver: zodResolver(addressRegistrationValidation),
    defaultValues: DEFAULT_VALEUS_ADDRESS_REGISTRATION,
  })

  return { form }
}
