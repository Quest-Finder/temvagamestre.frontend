import FormAboutYou from '@/features/about-you/form-about-you'

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
        <Link href='/register/form?show=form'>
          <Button>formulario</Button>
        </Link>
      </div>
    </main>
  )
}
