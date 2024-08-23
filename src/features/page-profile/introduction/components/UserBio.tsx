'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'

import { useResize } from '../hooks/useResize'

interface UserBioProps {
  description: string
}

export function UserBio({ description }: UserBioProps) {
  const { width } = useResize()
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
  }, [width])

  return (
    <>
      <p
        ref={truncatedTextRef}
        className={`${
          truncateText ? 'truncated-text' : ''
        } text-sm leading-6 text-neutral-400 sm:text-base`}
      >
        {description}
      </p>
      {showMore && (
        <Button
          onClick={() => setTruncateText(!truncateText)}
          variant='ghost'
          className='my-[5px] h-auto justify-end p-0 text-base font-semibold text-neutral-950 hover:bg-transparent'
        >
          {truncateText ? 'Ver mais' : 'Ver menos'}
        </Button>
      )}
    </>
  )
}
