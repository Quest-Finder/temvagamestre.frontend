import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { TsocialNetworkValidation } from '../types/social-network'

export default function useSubmitFormAddressRegistration(
  form: UseFormReturn<TsocialNetworkValidation>,
  navigateToPlayerProfileUrl: string,
) {
  const router = useRouter()

  return useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (values: TsocialNetworkValidation) => {
      // uselocalStorageSetItem('form_data_adress', values)
      router.push(navigateToPlayerProfileUrl)
    },
    [navigateToPlayerProfileUrl, router],
  )
}
