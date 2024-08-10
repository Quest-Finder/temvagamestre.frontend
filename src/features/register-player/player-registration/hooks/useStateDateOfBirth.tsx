'use client'

import { useState } from 'react'

import useLocalStorageGetItem from '@/features/register-player/address-registration/hooks/useLocalStorageGetItem'

import { FormStepOneType } from '../validation'
import { useFormStepOne } from './useFormStepOne'

export function useStateDateOfBirth() {
  const savedData = useLocalStorageGetItem<FormStepOneType>('form_step_one')
  const dateLocalStorage = savedData?.dateOfBirth.split('-')

  const {
    form: { setValue },
  } = useFormStepOne()

  const [dateForm, setDateForm] = useState({
    month: dateLocalStorage?.[0] ?? '',
    day: dateLocalStorage?.[1] ?? '',
    yaer: dateLocalStorage?.[2] ?? '',
  })

  const handleDay = (e: string) => {
    setDateForm(prev => ({ ...prev, day: e }))
    const formatDate = `${dateForm.month}-${dateForm.day}-${dateForm.yaer}`
    setValue('dateOfBirth', formatDate)
  }
  const handleMonth = (e: string) => {
    setDateForm(prev => ({ ...prev, month: e }))
  }
  const handleYear = (e: string) => {
    setDateForm(prev => ({ ...prev, yaer: e }))
  }

  return { handleDay, handleMonth, handleYear, dateForm }
}
