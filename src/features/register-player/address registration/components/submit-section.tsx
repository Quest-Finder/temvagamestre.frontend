import { RegisterRoutes } from '@/services/routers'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { SubmitButton } from '../../components/submit-button'
import ReplyBtnLatter from '../../utils/reply-button-later'
import { useIsDisabled } from '../store/store'
import { addressRegistrationValidationT } from '../types/address-registration'

export function SubmitSection() {
  const { isDisabled, setIsDisabled } = useIsDisabled()
  const { watch } = useFormContext<addressRegistrationValidationT>()

  useEffect(() => {
    if (watch('state') === undefined && watch('city') === undefined) {
      setIsDisabled(false)
    }
    setIsDisabled(true)
  }, [watch, setIsDisabled])
  return (
    <div className='flex flex-col items-center justify-between gap-4'>
      <SubmitButton disabled={isDisabled} />
      <ReplyBtnLatter router={RegisterRoutes.StylesPlay} />
    </div>
  )
}
