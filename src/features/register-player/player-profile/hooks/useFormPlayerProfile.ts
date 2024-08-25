import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  FormPlayerProfileType,
  PlayerProfileType,
} from '../types/palyerProfileTypes'
import { FormPlayerProfileSchema } from '../validation'
import { useFetchData } from './useFetchData'

export function useFormPlayerProfile() {
  const {
    data: palyerProfileTypes,
    isLoading,
    error,
  } = useFetchData<PlayerProfileType[]>('/rpg-player-profile') // rota ainda ão feita
  const form = useForm<FormPlayerProfileType>({
    resolver: zodResolver(FormPlayerProfileSchema),
    defaultValues: {
      playerProfileId: '',
    },
  })

  return { form, palyerProfileTypes, isLoading, error }
}
