'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useResize } from '../hooks/useResize'

interface UserBioProps {
  description: string
}

export function UserBio({ description }: UserBioProps) {
  const size = useResize()
  const truncatedTextRef = useRef<HTMLParagraphElement | null>(null)
  const [showMore, setShowMore] = useState(false)
  const [truncateText, setTruncateText] = useState(true)

  useEffect(() => {
    const text = truncatedTextRef.current
    if (text && text.offsetHeight < text.scrollHeight) {
      setShowMore(true)
    } else {
      setShowMore(false)
    }
  }, [size])

  return (
    <>
      <p
        ref={truncatedTextRef}
        className={`${
          truncateText ? 'truncated-text ' : ''
        } text-sm leading-6 text-neutral-500 sm:text-xl`}
      >
        {description.length === 0 || description === '' ? (
          <span className='block text-center'>Nenhuma bio cadastrada</span>
        ) : (
          description
        )}
      </p>
      {showMore && (
        <Button
          onClick={() => setTruncateText(!truncateText)}
          variant='ghost'
          className='my-[9px] ml-auto h-auto max-w-max p-0 text-base font-medium leading-none text-neutral-950 hover:bg-transparent'
        >
          {truncateText ? 'Ver mais' : 'Ver menos'}
        </Button>
      )}
    </>
  )
}
