import { UseFormReturn } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'

export default function SetErrorInFieldValue(
  form: UseFormReturn<addressRegistrationValidationT>,
  values: addressRegistrationValidationT,
  field: 'city' | 'state',
) {
  const liveInBrazilIsFalse = values.liveInBrazil === false
  const valuesFieldIsEmpty = values[field] === ''
  if (liveInBrazilIsFalse && valuesFieldIsEmpty) {
    return form.setError(field, {
      type: 'manual',
      message: 'Campo obrigatório',
    })
  }
}
