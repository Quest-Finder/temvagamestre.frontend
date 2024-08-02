'use client'

import { RegisterRoutes } from '@/services/routers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import useLocalStorageGetItem from '../../address registration/hooks/useLocalStorageGetItem'
import uselocalStorageSetItem from '../../address registration/hooks/uselocalStorageSetItem'

const SocialMediaDetailsSchema = z.object({
  socialMediaId: z.string().max(255),
  userLink: z.string().min(3).max(255),
})

const FormSchema = z.object({
  socialMedias: z.array(SocialMediaDetailsSchema),
})

type FormSchemaT = z.infer<typeof FormSchema>

export default function useFormSocialMedia() {
  const localStorageKey = 'form_step_two'
  const parsedData = useLocalStorageGetItem<FormSchemaT>(localStorageKey)
  const [isDisabled, setIsDisabled] = useState(true)
  const form = useForm<FormSchemaT>({
    resolver: zodResolver(FormSchema),
    defaultValues: parsedData ?? { socialMedias: [] },
    mode: 'onChange',
  })
  const router = useRouter()
  function onSubmit(values: FormSchemaT) {
    uselocalStorageSetItem(localStorageKey, values)
    router.push(RegisterRoutes.AboutYou)
  }
  function setValueId(id: string, index: number) {
    form.setValue(`socialMedias.${index}.socialMediaId`, id)
  }
  function setValueUserLink(id: string, value: string, index: number) {
    if (value === '') {
      form.reset()
      setIsDisabled(() => true)
      return
    }
    form.setValue(`socialMedias.${index}.socialMediaId`, id)
    form.setValue(`socialMedias.${index}.userLink`, value)
    if (value.length > 3) {
      setIsDisabled(() => false)
    }
  }

  return { form, isDisabled, onSubmit, setValueId, setValueUserLink }
}
