import Image from 'next/image'
import { Suspense } from 'react'

interface CardWithImgProps {
  urlImgs: string[]
}
export function CardWithImg({ urlImgs }: CardWithImgProps) {
  return (
    <section
      key={new Date().getTime().toString()}
      className='flex items-center justify-center  gap-4  overflow-x-auto rounded-xl pr-1'
    >
      {urlImgs.map(url => (
        <Suspense
          fallback={<div className='h-52 w-64 bg-red-600'>Loading...</div>}
        >
          <Image
            src={url}
            alt=''
            width={259}
            height={208}
            className='rounded-xl'
            loading='lazy'
          />
        </Suspense>
      ))}
    </section>
  )
}
