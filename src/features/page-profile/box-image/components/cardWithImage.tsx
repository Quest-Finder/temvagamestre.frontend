import Image from 'next/image'

interface CardWithImgProps {
  urlImgs: string[]
}
export function CardWithImg({ urlImgs }: CardWithImgProps) {
  return (
    <section
      key={new Date().getTime().toString()}
      className='flex items-center justify-center  gap-4  overflow-x-auto rounded-xl pl-[68%] pr-1'
    >
      {urlImgs.map(url => (
        <Image
          src={url}
          alt=''
          width={259}
          height={208}
          className='rounded-xl'
          loading='lazy'
        />
      ))}
    </section>
  )
}
