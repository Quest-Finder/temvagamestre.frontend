import uselocalStorageSetItem from '@/features/register-player/address registration/hooks/uselocalStorageSetItem'
import { RegisterRoutes } from '@/services/routers'
import { useRouter } from 'next/navigation'
import { FormPlayerProfileType } from '../types/palyerProfileTypes'

export default function useSubmitGameStyles() {
  const router = useRouter()
  return (values: FormPlayerProfileType) => {
    uselocalStorageSetItem('player_profile', values)
    router.push(RegisterRoutes.Sucess)
  }
}