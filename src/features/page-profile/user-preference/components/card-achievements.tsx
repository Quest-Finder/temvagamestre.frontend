import Image from 'next/image'
import React from 'react'

interface CardAchievementsProps {
  text: string
  src: string
}
export default function CardAchievements({ text, src }: CardAchievementsProps) {
  return (
    <>
      {src && (
        <div className='inline-flex size-[54px] items-center justify-center'>
          <Image
            className='relative size-[54px] rounded-[999px]'
            src={src}
            alt={text}
            width={54}
            height={54}
          />
        </div>
      )}
      {text && (
        <p className='font-mono text-xl leading-[48px] text-neutral-800'>
          {text}
        </p>
      )}
    </>
  )
}
