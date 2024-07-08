'use client'

import { RegisterRoutes } from '@/services/routers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useLocalStorageGetItem from '../../address registration/hooks/useLocalStorageGetItem'
import uselocalStorageSetItem from '../../address registration/hooks/uselocalStorageSetItem'
import { FielName, TsocialNetworkValidation } from '../types/social-network'
import { DEFAULT_VALUES_SOCIAL_MEDIA } from '../utils/defaul-values-social-media'
import { socialNetworkValidation } from '../utils/social-network-registration-validation'

export default function useFormSocialMedia() {
  // recupera os valores do local storage
  const parsedData =
    useLocalStorageGetItem<TsocialNetworkValidation>('form_data_adress')
  const form = useForm<TsocialNetworkValidation>({
    resolver: zodResolver(socialNetworkValidation),
    defaultValues: DEFAULT_VALUES_SOCIAL_MEDIA || parsedData,
    mode: 'onChange',
  })
  const router = useRouter()

  const socialNetworks = form.watch([
    'facebook',
    'instagram',
    'discord',
    'reddit',
    'x',
  ])
  const isDisabled = Object.values(socialNetworks).some(network => {
    return network && (network.userLink?.length as number) >= 3
  })

  function onSubmit(values: TsocialNetworkValidation) {
    uselocalStorageSetItem('form_step_two', values)
    router.push(RegisterRoutes.AboutYou)
  }

  function setValueId(fieldName: FielName, id: string) {
    form.setValue(`${fieldName}.socialMediaId`, id)
  }

  return { form, isDisabled, onSubmit, setValueId }
}
