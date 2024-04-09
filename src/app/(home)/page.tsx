import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-3'>
        <Link href='/sign-in'>
          <Button>sign-in</Button>
        </Link>
        <Link href='/user/profile?show=profile'>
          <Button>profile</Button>
        </Link>
        <Link href='/registration/final?show=final'>
          <Button>conclusion</Button>
        </Link>
      </div>
    </main>
  )
}
