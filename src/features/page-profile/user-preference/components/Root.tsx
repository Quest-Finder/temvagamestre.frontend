import React from 'react'

interface RootProps {
  children: React.ReactNode
}
export default function Root({ children }: RootProps) {
  return <div className='flex w-full flex-col  pb-3 '>{children}</div>
}
