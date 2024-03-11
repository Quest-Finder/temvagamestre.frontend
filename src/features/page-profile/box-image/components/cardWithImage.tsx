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
      className='pl-[68%] flex items-center justify-center gap-4 overflow-x-auto rounded-xl w-full border-none'
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
