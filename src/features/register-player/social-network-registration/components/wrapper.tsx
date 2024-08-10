import React from 'react'

interface Props {
  children: React.JSX.Element | React.JSX.Element[]
}
export default function Wrapper({ children }: Props) {
  return (
    <div className='flex h-16 items-center justify-center gap-4 px-1'>
      {children}
    </div>
  )
}
