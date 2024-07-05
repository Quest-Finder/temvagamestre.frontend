import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useLocalStorageGetItem from '../../address registration/hooks/useLocalStorageGetItem'
import { TValidation } from '../types/validation'
import { defaultValuesAboutYou } from '../utils/default-values'
import { validateAboutYou } from '../utils/validation'

export default function useHookFormAboutYou() {
  const parsedData = useLocalStorageGetItem('form_data_about_you')

  const form = useForm<TValidation>({
    resolver: zodResolver(validateAboutYou),
    defaultValues: parsedData || defaultValuesAboutYou,
    mode: 'onChange',
  })
  return form
}
