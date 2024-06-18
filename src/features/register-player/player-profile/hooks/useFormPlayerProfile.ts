import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormPlayerProfileSchema } from '../validation'
import {
  PlayerProfileType,
  FormPlayerProfileType,
} from '../types/palyerProfileTypes'
import { useFetchData } from './useFetchData'

export function useFormPlayerProfile() {
  const {
    data: palyerProfileTypes,
    isLoading,
    error,
  } = useFetchData<PlayerProfileType[]>(
    'https://tem-vaga-mestre-api-nnf7bytugq-uc.a.run.app/', // rota ainda nao feita
  )

  const form = useForm<FormPlayerProfileType>({
    resolver: zodResolver(FormPlayerProfileSchema),
    defaultValues: {
      playerProfileId: '',
    },
  })

  return { form, palyerProfileTypes, isLoading, error }
}
