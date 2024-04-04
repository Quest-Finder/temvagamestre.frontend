import { useCallback } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'
import useNavigation from './useNavigation'
import uselocalStorageSetItem from './uselocalStorageSetItem'


export default function useSubmitFormAddressRegistration(
    form: UseFormReturn<addressRegistrationValidationT>,
    navigateToPlayerProfileUrl: string,
) {
    const { navigateToPlayerProfile } = useNavigation()

    return useCallback(
        (values: addressRegistrationValidationT) => {
            if (values.liveInBrazil === false && values.state === '') {
                form.setError('state', {
                    type: 'manual',
                    message: 'Campo obrigatório',
                })
                return
            }
            if (values.liveInBrazil === false && values.city === '') {
                form.setError('city', {
                    type: 'manual',
                    message: 'Campo obrigatório',
                })
                return
            }
            uselocalStorageSetItem('form_data_adress', values)
            // navigateToPlayerProfile(navigateToPlayerProfileUrl)
            console.table(values)
        },
        [navigateToPlayerProfile, navigateToPlayerProfileUrl, form],
    )
}


