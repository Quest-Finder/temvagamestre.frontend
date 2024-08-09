import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import useLocalStorageGetItem from '@/features/register-player/address-registration/hooks/useLocalStorageGetItem'

import { defaultValues } from '../helper'
import { FormStepOneSchema, FormStepOneType } from '../validation'
import { useGetNameByClerk, useSetValueDateOfBirth } from './'

export function useFormStepOne() {
  const [date, setDate] = useState('')
  const savedData = useLocalStorageGetItem<FormStepOneType>('form_step_one')
  const [nameLoading, setNameLoading] = useState(!savedData)
  const form = useForm<FormStepOneType>({
    resolver: zodResolver(FormStepOneSchema),
    defaultValues: savedData || defaultValues,
    mode: 'all',
  })
  useGetNameByClerk(savedData, form, setNameLoading)
  useSetValueDateOfBirth(form, date)
  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
  }

  return { nameLoading, form, handleSelectDate }
}
