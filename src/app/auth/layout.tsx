import { PatternOverlay } from '@/components/ui/pattern-overlay'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='relative flex min-h-svh items-center justify-center bg-player-hard p-4 sm:p-16'>
      <PatternOverlay />
      <div className='z-10 flex w-full max-w-6xl overflow-hidden rounded-4xl max-md:flex-col'>
        {children}
      </div>
    </div>
  )
}
