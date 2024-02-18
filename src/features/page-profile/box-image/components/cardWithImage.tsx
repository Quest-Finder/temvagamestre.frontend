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
      className='invisible-scrollbar flex min-h-[280px] max-w-[862px] gap-4 overflow-auto rounded-xl border-[1px] px-4 py-6 sm:px-6 sm:pt-4'
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
