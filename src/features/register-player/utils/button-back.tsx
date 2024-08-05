'use client'

import { useRouter } from 'next/navigation'

import { ArrowBack } from '@/components/icons/ArrowBack'
import { Button } from '@/components/ui/button'

export default function ButtonBack() {
  const router = useRouter()

  return (
    <Button
      variant='ghost'
      className='gap-2.5 text-neutral-400'
      onClick={() => {
        router.back()
      }}
    >
      <ArrowBack />
      Voltar
    </Button>
  )
}
