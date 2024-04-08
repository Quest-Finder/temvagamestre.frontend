import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TValidation } from '../types/validation'
import { defaultValuesAboutYou } from '../utils/default-values'
import { validateAboutYou } from '../utils/validation'

export default function useHookFormAboutYou() {
  // const parsedData = useLocalStorageGetItem('form_data_adress')

  const form = useForm<TValidation>({
    resolver: zodResolver(validateAboutYou),
    defaultValues: defaultValuesAboutYou,
    // defaultValues: parsedData || defaultValuesAboutYou,
  })
  return form
}
