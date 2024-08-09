import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import useLocalStorageGetItem from '@/features/register-player/address-registration/hooks/useLocalStorageGetItem'

import { defaultValues } from '../helpers/defaultValues'
import { FormGameStylesType, GameStyle } from '../types/gameStyles'
import { FormGameStylesSchema } from '../validation'
import { useFetchData } from './useFetchData'

export function useFormGameStyles() {
  const {
    data: gameStyles,
    isLoading,
    error,
  } = useFetchData<GameStyle[]>('/rpg-style')
  const savedData = useLocalStorageGetItem<FormGameStylesType>('game_styles')

  const initalValue = savedData || defaultValues

  const form = useForm<FormGameStylesType>({
    resolver: zodResolver(FormGameStylesSchema),
    defaultValues: initalValue,
  })

  return { form, gameStyles, isLoading, error }
}
