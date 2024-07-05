import { RegisterRoutes } from '@/services/routers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useLocalStorageGetItem from '../../address registration/hooks/useLocalStorageGetItem'
import uselocalStorageSetItem from '../../address registration/hooks/uselocalStorageSetItem'
import { TValidation } from '../types/validation'
import { defaultValuesAboutYou } from '../utils/default-values'
import { validateAboutYou } from '../utils/validation'

export default function useHookFormAboutYou() {
  const router = useRouter()
  const keyLocalStorage = 'form_step_tree'

  const parsedData = useLocalStorageGetItem(keyLocalStorage)

  const form = useForm<TValidation>({
    resolver: zodResolver(validateAboutYou),
    defaultValues: parsedData || defaultValuesAboutYou,
    mode: 'onChange',
  })

  function onSubmit(values: TValidation) {
    uselocalStorageSetItem(keyLocalStorage, values)
    router.push(RegisterRoutes.Adress)
  }
  return { form, onSubmit }
}
