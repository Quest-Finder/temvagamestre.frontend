import React from 'react'
import { UseFormReturn } from 'react-hook-form'

import { addressRegistrationValidationT } from '../types/address-registration'

export function useResetFieldsWhenLiveInBrazil(
  form: UseFormReturn<addressRegistrationValidationT>,
) {
  const liveInBrazil = form.watch('liveInBrazil')

  React.useEffect(() => {
    if (liveInBrazil === false) {
      return
    }
    form.setValue('state', '')
    form.setValue('city', '')
  }, [liveInBrazil, form])
}
