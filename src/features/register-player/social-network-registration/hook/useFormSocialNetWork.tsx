'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import useLocalStorageGetItem from '../../address-registration/hooks/useLocalStorageGetItem'
import { TsocialNetworkValidation } from '../types/social-network'
import { DEFAULT_VALUES_SOCIAL_MEDIA } from '../utils/defaul-values-social-media'
import { socialNetworkValidation } from '../utils/social-network-registration-validation'

export default function useFormSocialMedia() {
  // recupera os valores do local storage
  const parsedData =
    useLocalStorageGetItem<TsocialNetworkValidation>('form_data_adress')

  return useForm<TsocialNetworkValidation>({
    resolver: zodResolver(socialNetworkValidation),
    defaultValues: parsedData || DEFAULT_VALUES_SOCIAL_MEDIA,
  })
}
