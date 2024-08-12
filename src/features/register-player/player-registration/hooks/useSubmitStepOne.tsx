import { useRouter } from 'next/navigation'

import uselocalStorageSetItem from '@/features/register-player/address-registration/hooks/uselocalStorageSetItem'
import { RegisterRoutes } from '@/services/routers'

import { FormStepOneType } from '../validation'

export function useSubmitStepOne() {
  const router = useRouter()
  return (values: FormStepOneType) => {
    const notEmptyPronounValues = {
      ...values,
      pronoun: values.pronoun || "I don't want to share any pronouns",
    }
    uselocalStorageSetItem('form_step_one', notEmptyPronounValues)
    router.push(RegisterRoutes.SocialNetworks)
  }
}
