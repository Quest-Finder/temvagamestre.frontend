'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useEffect, useState } from 'react'

import { useUser } from '@clerk/nextjs'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormStepOneSchema, FormStepOneType } from '../validation'
import { defaultValues } from '../helper/defaultValues'
import { getLocalStorage } from '../helper/getLocalStorage'

export function useFormStepOne() {
  const [date, setDate] = useState('')
  const { user } = useUser()
  const defaultData = getLocalStorage<FormStepOneType>(
    'form_step_one',
    defaultValues,
  )

  const [nameLoading, setNameLoading] = useState(() => {
    if (defaultData.name !== '') {
      return false
    }
    return true
  })

  const form = useForm<FormStepOneType>({
    resolver: zodResolver(FormStepOneSchema),
    defaultValues: defaultData,
    mode: 'all',
  })

  useEffect(() => {
    if (defaultData.name !== '') {
      return
    }
    if (user?.fullName) {
      form.setValue('name', user?.fullName)
      setNameLoading(() => false)
    }
  }, [user, form, defaultData])

  useEffect(() => {
    form.setValue('dateOfBirth', date)
    if (date.length === 10) {
      form.trigger('dateOfBirth')
    }
  }, [date, form])

  const onSubmit = (data: z.infer<typeof FormStepOneSchema>) => {
    let newData = data
    if (data.pronoun === '') {
      newData = { ...data, pronoun: 'none' }
    }
    localStorage.setItem('form_step_one', JSON.stringify(newData))
  }

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
  }

  return { user, nameLoading, form, handleSelectDate, onSubmit }
}
