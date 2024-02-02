import { UserIntroductionComponent } from '../introduction/UserIntroduction'
import { BoxImage } from '../box-image/box-image'
import CalendarWithForm from '../calendar/example'
import { cn } from '@/lib/utils'
import UserDescriptionComponent from '../user-description/user-description'
import UserPreferenceomponet from '../user-profile/userPreferences'

export function DesktopPage() {
  return (
    <>
       <section className='mx-auto hidden min-[900px]:grid min-h-screen max-w-[1140px] grid-cols-12 px-3 pb-5 mt-4'>
        <aside className='col-span-4 min-w-[380px]'>
          <div>
            <UserDescriptionComponent />
            <UserPreferenceomponet />
          </div>
        </aside>
        <main className='col-span-8  col-start-6'>
          <UserIntroductionComponent />
          <BoxImage />
          <CalendarWithForm />
        </main>
      </section>
    </>
  )
}
