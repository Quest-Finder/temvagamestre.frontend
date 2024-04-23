import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import useLocalStorageGetItem from '@/features/register-player/address registration/hooks/useLocalStorageGetItem'
import uselocalStorageSetItem from '@/features/register-player/address registration/hooks/uselocalStorageSetItem'
import { RegisterRoutes } from '@/services/routers'
import { useRouter } from 'next/navigation'
import { defaultValues } from '../helper/defaultValues'
import { FormStepOneSchema, FormStepOneType } from '../validation'

export function useFormStepOne() {
  const [date, setDate] = useState('')
  const { user } = useUser()
  const savedData = useLocalStorageGetItem<FormStepOneType>('form_step_one')
  const [nameLoading, setNameLoading] = useState(!savedData)

  const router = useRouter()

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
    uselocalStorageSetItem('form_step_one', newData)
    router.push(RegisterRoutes.SocialNetworks)
  }

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
  }

  return { user, nameLoading, form, handleSelectDate, onSubmit }
}
