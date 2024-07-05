'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useLocalStorageGetItem from '../../address registration/hooks/useLocalStorageGetItem'
import { TsocialNetworkValidation } from '../types/social-network'
import { DEFAULT_VALUES_SOCIAL_MEDIA } from '../utils/defaul-values-social-media'
import { socialNetworkValidation } from '../utils/social-network-registration-validation'

export default function useFormSocialMedia() {
  // recupera os valores do local storage
  const parsedData =
    useLocalStorageGetItem<TsocialNetworkValidation>('form_data_adress')
  const form = useForm<TsocialNetworkValidation>({
    resolver: zodResolver(socialNetworkValidation),
    defaultValues: parsedData || DEFAULT_VALUES_SOCIAL_MEDIA,
    mode: 'onChange',
  })

  const socialNetworks = form.watch([
    'facebook',
    'instagram',
    'discord',
    'reddit',
    'twitter',
  ])
  const isDisabled = Object.values(socialNetworks).some(network => {
    return network && (network.username?.length as number) >= 3
  })

  function onSubmit(values: TsocialNetworkValidation) {
    console.log(values)
  }

  return { form, isDisabled, onSubmit }
}
