import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import uselocalStorageSetItem from '../../address-registration/hooks/uselocalStorageSetItem'
import { TsocialNetworkValidation } from '../types/social-network'

export default function useSubmitSocialNetWokr(url: string) {
  const router = useRouter()
  return useCallback(
    (values: TsocialNetworkValidation) => {
      uselocalStorageSetItem('form_data_social_network', values)
      router.push(url)
    },
    [url, router],
  )
}
