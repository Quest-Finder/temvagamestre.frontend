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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import img from '../../../features/page-profile/header/assets/Rectangle.svg'

const arrayImgsMock: string[] = [img, img, img]
export default function Profile() {
  const searchParams = useSearchParams()
  type ShowElement = 'profile' | 'images' | 'dates' | null
  const showElemnt: ShowElement = searchParams.get('show') as ShowElement

  return (
    <>
      <HeaderProfile />
      <section className='mx-auto mt-4 grid min-h-screen max-w-[1440px] grid-cols-1 gap-2 px-3 pb-5 md:grid-cols-12 md:grid-rows-none'>
        <aside className='flex flex-col gap-8 md:col-span-4'>
          <div className='-mt-24 flex flex-col items-center justify-start gap-2'>
            <Avatar className={cn(' flex h-36 w-36')}>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <UserDescriptionComponent
              username='Lucas Marcelo'
              nickname='mestremarcelo'
              pronomes='Ele - Dele'
              description='Mestre D&D com 15 anos de experiência'
              localization='São Paulo | Brasil'
              age='35 anos'
            />
          </div>
          <div className='hidden flex-col gap-2 md:flex'>
            <UserPreferenceCategorys
              rpgStyle={userMock.preferences.rpgStyles}
              badges={userMock.badges}
            />
            <PlayerProfileSection />
          </div>
        </aside>
        <main className='hidden  flex-col gap-2 md:col-span-9 md:col-start-5 md:flex'>
          <UserIntroductionComponent />
          <BoxImage arrayImgs={arrayImgsMock} />
        </main>
        {/* mobile */}
        <div className='md:hidden'>
          <aside>
            <SelectPage />
          </aside>
          <main className='col-span-12 row-span-2  flex items-center justify-center'>
            <div className='flex w-full max-w-[400px] flex-col items-center justify-center gap-3'>
              {showElemnt === 'profile' && (
                <div className='w-full'>
                  <UserIntroductionComponent />
                  <UserPreferenceCategorys
                    rpgStyle={userMock.preferences.rpgStyles}
                    badges={userMock.badges}
                  />
                </div>
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
