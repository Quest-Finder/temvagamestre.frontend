import React from 'react'

interface RootProps {
  children: React.ReactNode
}
export default function Root({ children }: RootProps) {
  return <div className='flex flex-col sm:w-[416px]'>{children}</div>
}
