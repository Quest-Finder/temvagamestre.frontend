'use client'

import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FormStepOneType } from '../validation'

export function useSetValueDateOfBirth(
  form: UseFormReturn<FormStepOneType>,
  date: string,
) {
  useEffect(() => {
    form.setValue('dateOfBirth', date)
    if (date.length === 10) {
      form.trigger('dateOfBirth')
    }
  }, [date, form])
}
