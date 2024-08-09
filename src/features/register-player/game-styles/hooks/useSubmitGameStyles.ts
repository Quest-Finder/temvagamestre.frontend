import { useRouter } from 'next/navigation'

import uselocalStorageSetItem from '@/features/register-player/address-registration/hooks/uselocalStorageSetItem'
import { RegisterRoutes } from '@/services/routers'

import { FormGameStylesType } from '../types/gameStyles'

export function useSubmitGameStyles() {
  const router = useRouter()
  return (values: FormGameStylesType) => {
    uselocalStorageSetItem('game_styles', values)
    router.push(RegisterRoutes.PlayerProfile)
  }
}
