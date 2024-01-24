import CalendarWithForm from '@/features/page-profile/calendar/example'
import UserPreferencesExample from '@/features/page-profile/user-profile'
import Link from 'next/link'

export default function UserProfile() {
  return (
    <main className='flex items-center justify-center'>
      <Link href='/'>voltar para home</Link>
      <UserPreferencesExample />
      <CalendarWithForm />
    </main>
  )
}
