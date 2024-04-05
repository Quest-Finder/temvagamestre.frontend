'use client'

import { useSearchParams } from 'next/navigation'
import { BoxImage } from '../box-image/box-image'
import UserPreferenceComponent from '../user-preference/userPreferences'
import { PlayerProfileSection } from '../playerProfileSection/PlayerProfileSection'

export function Mobile() {
  const searchParams = useSearchParams()
  type ShowElement = 'profile' | 'images' | 'dates' | null
  const showElemnt: ShowElement = searchParams.get('show') as ShowElement
  return (
    <div className='col-span-12 row-span-2  flex items-center justify-center'>
      <div className='flex max-w-[430px] flex-col items-center justify-center gap-3'>
        {showElemnt === 'profile' && <UserPreferenceComponent />}
        {showElemnt === 'profile' && <PlayerProfileSection />}
      </div>
      {showElemnt === 'images' && <BoxImage />}
      {/* {showElemnt === 'dates' && <CalendarWithForm />} */}
    </div>
  )
}