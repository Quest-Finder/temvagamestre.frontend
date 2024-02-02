import React from 'react'

interface RootPros {
  children: React.ReactNode
}
export function Root({ children }: RootPros) {
  return <section className='flex flex-col gap-4 px-4 py-6'>{children}</section>
}
