import { useCallback } from 'react'
import { TsocialNetworkValidation } from '../types/social-network'

export default function useSubmitFormAddressRegistration(url: string) {
  return useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (values: TsocialNetworkValidation) => {
      // uselocalStorageSetItem('form_data_adress', values)
      // router.push(url)
    },
    [],
  )
}
