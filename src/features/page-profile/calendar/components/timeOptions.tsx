'use client'

import { Button } from '@/components/ui/button'
import useWindowDimensions from '@/hooks/useWindowWidth'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'
import { getButtonVariants } from '../js/getButtonVariantsTimeOptions'
import { Text } from './typograph'

const availableTimeSlotsMocks = ['09:00am', '10:00am', '14:00am', '17:00am']
export function TimeOptions({
  onSubmitForm,
  availableTimeSlots = availableTimeSlotsMocks,
}: {
  onSubmitForm: (hour: string) => void
  availableTimeSlots?: string[]
}) {
  const { width } = useWindowDimensions()
  const isMobile = width < 835

  const timeSlotElements = useMemo(() => {
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
  }, [isMobile, onSubmitForm, availableTimeSlots])

  return timeSlotElements
}
