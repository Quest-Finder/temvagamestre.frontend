import { UserIntroductionComponent } from '../introduction/UserIntroduction'
import { BoxImage } from '../box-image/box-image'
import CalendarWithForm from '../calendar/calendarWithForm'
import UserDescriptionComponent from '../user-description/user-description'
import UserPreferenceComponent from '../user-preference/userPreferences'
import { PlayerProfileSection } from '../playerProfileSection/PlayerProfileSection'

export function DesktopPage() {
  return (
    <section className='mx-auto mt-4 hidden min-h-screen max-w-[1140px] grid-cols-12 px-3 pb-5 min-[900px]:grid'>
      <aside className='col-span-4 min-w-[380px]'>
        <div>
          <UserDescriptionComponent />
          <UserPreferenceComponent />
          <PlayerProfileSection />
        </div>
      </aside>
      <main className='col-span-8  col-start-6'>
        <UserIntroductionComponent />
        <BoxImage />
        <CalendarWithForm />
      </main>
    </section>
  )
}
