'use client'

import { Button } from '@/components/ui/button'
import { RegisterRoutes } from '@/services/routers'
import { useRouter } from 'next/navigation'

interface Props {
  path: keyof typeof RegisterRoutes | string
}
export default function ButtonNextPage({ path }: Props) {
  const router = useRouter()

  return (
    <Button
      variant='ghost'
      size='lg'
      className='min-h-[52px] w-full max-w-[281px] rounded-md p-4 text-[#7C7C7C] transition-all hover:bg-[#CCFBF1]'
      onClick={() => router.push(path)}
      type='button'
    >
      Prefiro responder em outro momento
    </Button>
  )
}
