import React from 'react'

interface RootPros {
  children: React.ReactNode
}
export function Root({ children }: RootPros) {
  return <section className='flex w-full flex-col gap-8'>{children}</section>
}
