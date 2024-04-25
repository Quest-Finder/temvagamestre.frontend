import uselocalStorageSetItem from '@/features/register-player/address registration/hooks/uselocalStorageSetItem'
import { RegisterRoutes } from '@/services/routers'
import { useRouter } from 'next/navigation'
import { FormStepOneType } from '../validation'

export default function useSubmitStepOne() {
  const router = useRouter()
  return (values: FormStepOneType) => {
    uselocalStorageSetItem('form_step_one', values)
    router.push(RegisterRoutes.SocialNetworks)
  }
}
