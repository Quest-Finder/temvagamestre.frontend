import SingIn from '@/features/authentication/singIn'
import Link from 'next/link'
import { Suspense } from 'react'

export default function SingInPage() {
  return (
    <div className='flex h-screen flex-col items-center	justify-center'>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='mx-auto flex min-h-[519px] w-full items-center justify-center'>
          <SingIn />
        </div>
      </Suspense>
      <Link
        href='/'
        className='bg-zinc-600 px-5 py-3'
      >
        <span className='text-white'>home</span>
      </Link>
    </div>
  )
}
