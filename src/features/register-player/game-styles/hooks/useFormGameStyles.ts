import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useLocalStorageGetItem from '@/features/register-player/address registration/hooks/useLocalStorageGetItem'
import { FormGameStylesSchema } from '../validation'
import { GameStyle, FormGameStylesType } from '../types/gameStyles'
import { useFetchData } from './useFetchData'
import { defaultValues } from '../helpers/defaultValues'

export function useFormGameStyles() {
  const {
    data: gameStyles,
    isLoading,
    error,
  } = useFetchData<GameStyle[]>(process.env.REACT_APP_RPG_STYLE_API_URL)
  const savedData = useLocalStorageGetItem<FormGameStylesType>('game_styles')

  const initalValue = savedData || defaultValues

  const form = useForm<FormGameStylesType>({
    resolver: zodResolver(FormGameStylesSchema),
    defaultValues: initalValue,
  })

  return { form, gameStyles, isLoading, error }
}
