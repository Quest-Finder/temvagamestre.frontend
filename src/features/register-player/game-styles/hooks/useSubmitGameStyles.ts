import uselocalStorageSetItem from '@/features/register-player/address registration/hooks/uselocalStorageSetItem'
import { RegisterRoutes } from '@/services/routers'
import { useRouter } from 'next/navigation'
import { FormGameStylesType } from '../types/gameStyles'

export default function useSubmitGameStyles() {
  const router = useRouter()
  return (values: FormGameStylesType) => {
    uselocalStorageSetItem('game_styles', values)
    router.push(RegisterRoutes.PlayerProfile)
  }
}
