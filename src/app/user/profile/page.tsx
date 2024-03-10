'use client'

import { BoxImage } from '@/features/page-profile/box-image/box-image'
import { HeaderProfile } from '@/features/page-profile/header/header'
import { UserIntroductionComponent } from '@/features/page-profile/introduction/UserIntroduction'
import { userMock } from '@/features/page-profile/mocks/mock'
import { PlayerProfileSection } from '@/features/page-profile/playerProfileSection/PlayerProfileSection'
import { SelectPage } from '@/features/page-profile/select-page/selectPage'
import UserDescriptionComponent from '@/features/page-profile/user-description/user-description'
import UserPreferenceCategorys from '@/features/page-profile/user-preference/userPreferences'
import { useSearchParams } from 'next/navigation'
import img from '../../../features/page-profile/header/assets/Rectangle.svg'

const arrayImgsMock: string[] = [img, img, img]

export default function Profile() {
  const searchParams = useSearchParams()
  type ShowElement = 'profile' | 'images' | 'dates' | null
  const showElemnt: ShowElement = searchParams.get('show') as ShowElement

  return (
    <>
      <HeaderProfile />
      <section className='mx-auto mt-4 grid min-h-screen max-w-[1440px] grid-cols-1 gap-2 px-3 pb-5 lg:grid-cols-12 lg:grid-rows-none'>
        <aside className='lg:col-span-4'>
          <UserDescriptionComponent
            username='Lucas Marcelo'
            pronomes='Ele - Dele'
            description='Mestre D&D com 15 anos de experiência'
            localization='São Paulo | Brasil'
            age='35 anos'
          />
          <div className='hidden flex-col gap-2 lg:flex'>
            <UserPreferenceCategorys
              rpgStyle={userMock.preferences.rpgStyles}
              badges={userMock.badges}
            />
            <PlayerProfileSection />
          </div>
        </aside>
        <main className='hidden  flex-col gap-2 lg:col-span-8 lg:col-start-6 lg:flex'>
          <UserIntroductionComponent />
          <BoxImage arrayImgs={arrayImgsMock} />
        </main>
        {/* mobile */}
        <div className='lg:hidden'>
          <aside>
            <SelectPage />
          </aside>
          <main className='col-span-12 row-span-2  flex items-center justify-center'>
            <div className='flex w-full max-w-[400px] flex-col items-center justify-center gap-3'>
              {showElemnt === 'profile' && (
                <UserPreferenceCategorys
                  rpgStyle={userMock.preferences.rpgStyles}
                  badges={userMock.badges}
                />
              )}
              {showElemnt === 'profile' && <PlayerProfileSection />}
              {showElemnt === 'images' && (
                <BoxImage arrayImgs={arrayImgsMock} />
              )}
            </div>
          </main>
        </div>
      </section>
    </>
  )
}
