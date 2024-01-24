import Text from '@/components/typograph/text'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

interface ButtomMobileProps {
  handleSubmitForm: () => void
}
export default function ButtonMobile({ handleSubmitForm }: ButtomMobileProps) {
  return (
    <section className='block tablet:hidden'>
      <Button
        onClick={handleSubmitForm}
        className={cn(
          'inline-flex w-96 items-center justify-center gap-2.5 rounded-md bg-teal-800 px-4 py-3 hover:bg-teal-800/90',
        )}
      >
        <Text>Agendar</Text>
      </Button>
    </section>
  )
}
