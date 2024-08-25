import React from 'react'

interface RootProps {
  children: React.ReactNode
}
export function Root({ children }: RootProps) {
  return <main className='grid gap-4 min-[704px]:grid-cols-4'>{children}</main>
}
