'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

interface UserBioProps {
  children: string
}

export function UserBio({ children }: UserBioProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <p className='text-xl leading-6 text-zinc-500'>
        {showMore ? children : `${children.substring(0, 321)}...`}
      </p>
      <Button
        onClick={() => setShowMore(!showMore)}
        variant='ghost'
        className='my-3.5 ml-auto h-auto max-w-max p-0 text-base font-medium leading-none hover:bg-transparent'
      >
        Ver mais
      </Button>
    </>
  )
}
