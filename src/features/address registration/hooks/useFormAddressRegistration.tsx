import useLocalStorageGetItem from './useLocalStorageGetItem'
import { DEFAULT_VALEUS_ADDRESS_REGISTRATION } from '../utils/defaul-values'
import { useForm } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'
import { zodResolver } from '@hookform/resolvers/zod'
import { addressRegistrationValidation } from '../utils/address-registration-validation'
import useSubmitFormAddressRegistration from './useSubmitFormAddressRegistration'
import React from 'react'

export default function useFormAddressRegistration() {
    const parsedData = useLocalStorageGetItem('form_data_adress', DEFAULT_VALEUS_ADDRESS_REGISTRATION)
    const form = useForm<addressRegistrationValidationT>({
        resolver: zodResolver(addressRegistrationValidation),
        defaultValues: parsedData,
    })

    React.useEffect(() => {
        if (form.watch('liveInBrazil') === false) {
            return
        }
        form.setValue('state', '');
        form.setValue('city', '')
    }, [form.watch('liveInBrazil')])

    React.useEffect(() => {
        if (form.watch('state') !== '' || form.watch('city') !== '') {
            form.setValue('liveInBrazil', false)
        }
    }, [form.watch('state'), form.watch('city')])

    const onSubmit = useSubmitFormAddressRegistration(form, '/cadastro/perfil-de-jogador')
    return { form, onSubmit }
}
