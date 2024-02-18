import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-3'>
        <Link
          href='user/sign-in'
          className=''
        >
          <Button>
            <span className='text-white'>sign-in</span>
          </Button>
        </Link>
        <Link href='/user/profile?show=profile'>
          <Button>
            <span className='text-white'>profile</span>
          </Button>
        </Link>
      </div>
    </main>
  )
}
