'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TsocialNetworkValidation } from '../types/social-network'
import { socialNetworkValidation } from '../utils/social-network-registration-validation'
import { DEFAULT_VALUES_SOCIAL_MEDIA } from '../utils/defaul-values-social-media'

export default function useFormSocialMedia() {
    // const parsedData = useLocalStorageGetItem(
    //     'form_data_adress',
    //     DEFAULT_VALUES_SOCIAL_MEDIA,
    // )
    const form = useForm<TsocialNetworkValidation>({
        resolver: zodResolver(socialNetworkValidation),
        defaultValues: DEFAULT_VALUES_SOCIAL_MEDIA,
    })
    return { form }
}
