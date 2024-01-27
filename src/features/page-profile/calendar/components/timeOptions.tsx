'use client'

import Text from '@/components/typograph/text'
import useWindowDimensions from '@/hooks/useWindowWidth'
import { useMemo } from 'react'
import { getButtonVariants } from '../js/getButtonVariantsTimeOptions'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function TimeOptions({
  onSubmitForm,
}: {
  onSubmitForm: (hour: string) => void
}) {
  const { width } = useWindowDimensions()
  const isMobile: boolean = width <= 835

  const timeSlotElements = useMemo(() => {
    const availableTimeSlots = ['09:00am', '10:00am', '14:00am', '17:00am']

    return availableTimeSlots.map((time, index) => {
      const { color, variant, hover } = getButtonVariants(index, isMobile)

      return (
        <Button
          key={time}
          type='button'
          onClick={() => onSubmitForm(time)}
          className={cn(`${color} ${variant} ${hover}`)}
          // className='hover:'
        >
          <Text size='base'>{time}</Text>
        </Button>
      )
    })
  }, [isMobile, onSubmitForm])

  return (
    <section className='invisible-scrollbar flex w-full items-center gap-4 overflow-auto tablet:flex-col'>
      {timeSlotElements}
    </section>
  )
}
