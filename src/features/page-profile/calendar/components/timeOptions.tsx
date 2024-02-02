'use client'

import useWindowDimensions from '@/hooks/useWindowWidth'
import { useMemo } from 'react'
import { getButtonVariants } from '../js/getButtonVariantsTimeOptions'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Text } from './typograph'

export function TimeOptions({
  onSubmitForm,
}: {
  onSubmitForm: (hour: string) => void
}) {
  const { isWidthMobile } = useWindowDimensions(835)
  const isMobile = isWidthMobile

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
        >
          <Text className={cn(`text-base ${variant}`)}>{time}</Text>
        </Button>
      )
    })
  }, [isMobile, onSubmitForm])

  return <>{timeSlotElements}</>
}
