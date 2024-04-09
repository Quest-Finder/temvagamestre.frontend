import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
// import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormStepOneSchema, FormStepOneType } from '../validation'
import { defaultValues } from '../helper/defaultValues'
import {
  getSecureLocalStorage,
  setSecureLocalStorage,
} from '../helper/getLocalStorage'

export function useFormStepOne() {
  const [date, setDate] = useState('')
  const { user } = useUser()
  const savedData = getSecureLocalStorage<FormStepOneType>('form_step_one')
  const [nameLoading, setNameLoading] = useState(!savedData)

  // const router = useRouter()

  const form = useForm<FormStepOneType>({
    resolver: zodResolver(FormStepOneSchema),
    defaultValues: savedData || defaultValues,
    mode: 'all',
  })

  useEffect(() => {
    if (!savedData && user?.fullName) {
      form.setValue('name', user?.fullName)
      setNameLoading(() => false)
    }
  }, [user?.fullName, form, savedData])

  useEffect(() => {
    form.setValue('dateOfBirth', date)
    if (date.length === 10) {
      form.trigger('dateOfBirth')
    }
  }, [date, form])

  const onSubmit = (data: FormStepOneType) => {
    const newData = { ...data, pronoun: data.pronoun || 'none' }
    setSecureLocalStorage('form_step_one', newData)
    // router.push('/player-registration/step2')
  }

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
  }

  return { user, nameLoading, form, handleSelectDate, onSubmit }
}
