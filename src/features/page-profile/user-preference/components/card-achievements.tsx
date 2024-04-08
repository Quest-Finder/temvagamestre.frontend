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
        <div className='size-[54px] inline-flex items-center justify-center'>
          <Image
            className='size-[54px] relative rounded-[999px]'
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
