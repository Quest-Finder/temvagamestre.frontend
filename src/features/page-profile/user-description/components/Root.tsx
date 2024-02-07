import React from 'react'

interface RootPros {
  children: React.ReactNode
}
export function Root({ children }: RootPros) {
  return (
    <section className='mb-7 flex flex-col items-center  justify-center gap-7'>
      {children}
    </section>
  )
}
