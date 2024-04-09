import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'

export default function ResetCityFieldWhenStateChanges(
  form: UseFormReturn<addressRegistrationValidationT>,
) {
  const valueState = form.watch('state')

  React.useEffect(() => {
    if (!valueState) {
      return
    }
    form.setValue('city', '')
  }, [valueState, form])
}
