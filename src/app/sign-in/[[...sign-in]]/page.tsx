import Link from 'next/link'

import SingIn from '@/features/authentication/singIn'

export default function SingInPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <SingIn />
      <Link
        href='/'
        className='bg-zinc-600 px-5 py-3'
      >
        <span className='text-white'>voltar para home</span>
      </Link>
    </div>
  )
}
