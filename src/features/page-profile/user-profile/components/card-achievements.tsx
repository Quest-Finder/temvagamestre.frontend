import Image from 'next/image'
import React from 'react'

interface CardAchievementsProps {
  text?: string
  src?: string
}
export default function CardAchievements({ text, src }: CardAchievementsProps) {
  return (
    <>
      {src && (
        <div className='inline-flex h-[54px] w-[54px] items-center justify-center'>
          <Image
            className='relative h-[54px] w-[54px] rounded-[999px]'
            src={src}
            alt=''
            width={54}
            height={54}
          />
        </div>
      )}
      {text && (
        <p className="text-zinc-700 font-['Roboto'] text-xl font-normal leading-[48px]">
          {text}
        </p>
      )}
    </>
  )
}
