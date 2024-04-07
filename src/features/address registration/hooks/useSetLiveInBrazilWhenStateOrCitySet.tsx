import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'

export function useSetLiveInBrazilWhenStateOrCitySet(
  form: UseFormReturn<addressRegistrationValidationT>,
) {
  const state = form.watch('state')
  const city = form.watch('city')

  React.useEffect(() => {
    if (state !== '' || city !== '') {
      form.setValue('liveInBrazil', false)
    }
  }, [state, city, form])
}
