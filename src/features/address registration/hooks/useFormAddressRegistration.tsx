import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { addressRegistrationValidationT } from '../types/address-registration'
import { DEFAULT_VALEUS_ADDRESS_REGISTRATION } from '../utils/defaul-values'
import { addressRegistrationValidation } from '../utils/address-registration-validation'
import useLocalStorageGetItem from './useLocalStorageGetItem'
import useSubmitFormAddressRegistration from './useSubmitFormAddressRegistration'

export default function useFormAddressRegistration() {
  const parsedData = useLocalStorageGetItem(
    'form_data_adress',
    DEFAULT_VALEUS_ADDRESS_REGISTRATION,
  )
  const form = useForm<addressRegistrationValidationT>({
    resolver: zodResolver(addressRegistrationValidation),
    defaultValues: parsedData,
  })

  const liveInBrazil = form.watch('liveInBrazil')
  const state = form.watch('state')
  const city = form.watch('city')

  React.useEffect(() => {
    if (form.watch('liveInBrazil') === false) {
      return
    }
    form.setValue('state', '')
    form.setValue('city', '')
  }, [liveInBrazil, form])

  React.useEffect(() => {
    if (form.watch('state') !== '' || form.watch('city') !== '') {
      form.setValue('liveInBrazil', false)
    }
  }, [state, city, form])
  const onSubmit = useSubmitFormAddressRegistration(
    form,
    '/cadastro/perfil-de-jogador',
  )
  return { form, onSubmit }
}
