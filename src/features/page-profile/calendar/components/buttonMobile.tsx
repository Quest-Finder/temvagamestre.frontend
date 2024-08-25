import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { Text } from './typograph'

interface ButtomMobileProps {
  handleSubmitForm: () => void
}
export default function ButtonMobile({ handleSubmitForm }: ButtomMobileProps) {
  return (
    <section className='tablet:hidden'>
      <Button
        onClick={handleSubmitForm}
        className={cn(
          'inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-teal-800 px-4 py-3',
        )}
      >
        <Text
          as='p'
          className={cn('text-white')}
        >
          Agendar
        </Text>
      </Button>
    </section>
  )
}
