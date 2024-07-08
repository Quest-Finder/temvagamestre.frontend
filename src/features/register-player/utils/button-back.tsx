'use client'

import { ArrowBack } from '@/components/icons/ArrowBack'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ButtonBack() {
  const router = useRouter()

  return (
    <Button
      variant='ghost'
      className='gap-2.5 text-neutral-400 hover:bg-transparent'
      onClick={() => {
        router.back()
      }}
    >
      <ArrowBack />
      Voltar
    </Button>
  )
}
