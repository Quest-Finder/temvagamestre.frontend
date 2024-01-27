import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
     <div className='flex flex-col gap-3'>
      <Button>
        <Link
          href='/sign-in'
        >
          <span className='text-white'>sign-in</span>
        </Link>
      </Button>
      <Button>
        <Link
          href='/user/profile'
        >
          <span className='text-white'>profile</span>
        </Link>
      </Button>
     </div>
    </main>
  )
}
