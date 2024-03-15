'use client'

import { HeaderProfile } from '@/features/page-profile/header/header'
import { UserIntroductionComponent } from '@/features/page-profile/introduction/UserIntroduction'
import { userMock } from '@/features/page-profile/mocks/mock'
import { SelectPage } from '@/features/page-profile/select-page/selectPage'
import UserDescriptionComponent from '@/features/page-profile/user-description/user-description'
import UserPreferenceCategorys from '@/features/page-profile/user-preference/userPreferences'
import { useSearchParams } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardWithImgs } from '@/features/page-profile/box-image'
import { cn } from '@/lib/utils'
import img from '../../../features/page-profile/header/assets/Rectangle.svg'

const arrayImgsMock: string[] = [img, img, img, img, img]
export default function Profile() {
  const searchParams = useSearchParams()
  type ShowElement = 'profile' | 'images' | 'dates' | null
  const showElemnt: ShowElement = searchParams.get('show') as ShowElement

  return (
    <>
      <HeaderProfile />
      <div className='mx-auto mt-4 grid min-h-screen max-w-[1440px] grid-cols-1 px-6 pb-5 md:grid-cols-12 md:grid-rows-none md:space-x-14 md:px-[4.844rem]'>
        <aside className='-mt-24 flex flex-col gap-8 md:col-span-4'>
          <div className=' flex flex-col items-center justify-start gap-2'>
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
          </div>
        </aside>
        <section className='hidden flex-col gap-2 md:col-span-8 md:col-start-5 md:flex'>
          <UserIntroductionComponent />
          <CardWithImgs.Root>
            <CardWithImgs.Text content='Titulo - imagens' />
            <CardWithImgs.CardWithImg urlImgs={arrayImgsMock} />
          </CardWithImgs.Root>
        </section>
        {/* mobile */}
        <div className='mx-auto mt-8 flex min-h-screen w-full max-w-[450px] flex-col gap-8 md:mt-0 md:hidden'>
          <SelectPage />

          {showElemnt === 'profile' && (
            <>
              <UserIntroductionComponent />
              <UserPreferenceCategorys
                rpgStyle={userMock.preferences.rpgStyles}
                badges={userMock.badges}
              />
            </>
          )}
          {showElemnt === 'images' && (
            <CardWithImgs.Root>
              <CardWithImgs.Text content='Titulo - imagens' />
              <CardWithImgs.CardWithImg urlImgs={arrayImgsMock} />
            </CardWithImgs.Root>
          )}
        </div>
      </div>
    </>
  )
}
