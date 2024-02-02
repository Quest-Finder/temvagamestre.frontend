'use client'
import { useSearchParams } from 'next/navigation'
import UserPreferenceomponet from '../user-profile/userPreferences'
import { BoxImage } from '../box-image/box-image'
import CalendarWithForm from '../calendar/example'

export function Mobile() {
  const searchParams = useSearchParams()
  type ShowElement = 'profile' | 'images' | 'dates' | null
  const showElemnt: ShowElement = searchParams.get('show') as ShowElement
  return (
    <>
      <div className='col-span-12 row-span-2  flex items-center justify-center'>
        {showElemnt === 'profile' && <UserPreferenceomponet />}
        {showElemnt === 'images' && <BoxImage />}
        {showElemnt === 'dates' && <CalendarWithForm />}
      </div>
    </>
  )
}
