'use client'

import { useRouter } from 'next/navigation'

import { ArrowBack } from '@/components/icons/ArrowBack'
import { Button } from '@/components/ui/button'

export default function ButtonBack() {
  const router = useRouter()

  return (
    <Button
      variant='ghost'
      className='h-fit gap-[0.563rem] px-0 py-0 font-semibold text-neutral-400 hover:bg-transparent'
      onClick={() => {
        router.back()
      }}
    >
      <ArrowBack />
      Voltar
    </Button>
  )
}
