import React from 'react'

interface RootPros {
  children: React.ReactNode
}
export function Root({ children }: RootPros) {
  return (
    <section className='inline-flex w-full flex-col items-center justify-center gap-8'>
      {children}
    </section>
  )
}
