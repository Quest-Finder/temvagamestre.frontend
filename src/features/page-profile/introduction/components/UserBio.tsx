'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface UserBioProps {
  description: string
}

export function UserBio({ description }: UserBioProps) {
  const [showMore, setShowMore] = useState(description.length > 321)

  if (description.length === 0) {
    // eslint-disable-next-line no-param-reassign
    description = 'Sem briografia definida.'
  }

  return (
    <>
      <p className='text-sm leading-6 text-zinc-500 sm:text-xl'>
        {showMore ? `${description.substring(0, 321)}...` : description}
      </p>
      {description.length > 321 && (
        <Button
          onClick={() => setShowMore(!showMore)}
          variant='ghost'
          className='my-3.5 ml-auto h-auto max-w-max p-0 text-base font-medium leading-none hover:bg-transparent'
        >
          Ver mais
        </Button>
      )}
    </>
  )
}
