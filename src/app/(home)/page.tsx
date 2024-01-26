import { PlayerProfileSection } from '@/features/page-profile/playerProfileSection/PlayerProfileSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link
        href='/sign-in'
        className='bg-zinc-600 px-5 py-3'
      >
        <span className='text-white'>sign-in</span>
      </Link>
      <PlayerProfileSection/>
    </main>
  )
}
