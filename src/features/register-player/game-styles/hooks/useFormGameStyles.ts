import useLocalStorageGetItem from '@/features/register-player/address registration/hooks/useLocalStorageGetItem'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { defaultValues } from '../helpers/defaultValues'
import { FormGameStylesType, GameStyle } from '../types/gameStyles'
import { FormGameStylesSchema } from '../validation'
import { useFetchData } from './useFetchData'

export function useFormGameStyles() {
  const {
    data: gameStyles,
    isLoading,
    error,
  } = useFetchData<GameStyle[]>(`${process.env.NEXT_PUBLIC_BASE_URL}/rpg-style`)
  const savedData = useLocalStorageGetItem<FormGameStylesType>('game_styles')

  const initalValue = savedData || defaultValues

  const form = useForm<FormGameStylesType>({
    resolver: zodResolver(FormGameStylesSchema),
    defaultValues: initalValue,
  })

  return { form, gameStyles, isLoading, error }
}
