import React from 'react'

interface RootProps {
  children: React.ReactNode
}
export default function Root({ children }: RootProps) {
  return (
    <div className='flex w-full flex-col px-5 pb-3 tablet:px-10'>
      {children}
    </div>
  )
}
