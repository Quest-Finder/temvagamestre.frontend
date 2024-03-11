'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface CardWithImgProps {
  urlImgs: string[]
}
export function CardWithImg({ urlImgs }: CardWithImgProps) {
  return (
    <Card
      key={new Date().getTime().toString()}
      className='flex w-full items-center justify-center gap-4 overflow-x-auto rounded-xl border-none pl-[68%]'
    >
      {urlImgs.map(url => (
        <Image
          src={url}
          alt=''
          width={259}
          height={208}
          className='rounded-xl'
        />
      ))}
    </Card>
  )
}
