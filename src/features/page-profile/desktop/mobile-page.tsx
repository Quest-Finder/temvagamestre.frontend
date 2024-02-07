import { Mobile } from '../mobile/Mobile'
import { SelectPage } from '../select-page/selectPage'
import UserDescriptionComponent from '../user-description/user-description'

export function MobilePage() {
  return (
    <section className='mx-auto grid min-h-screen max-w-[1140px] grid-cols-12 min-[900px]:hidden '>
      <main className='col-span-10 col-start-2'>
        <UserDescriptionComponent />
        <SelectPage />
        <Mobile />
      </main>
    </section>
  )
}
