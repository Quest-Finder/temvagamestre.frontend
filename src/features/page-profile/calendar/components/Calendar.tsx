import React from 'react'
import { Calendar as Box } from '@/components/ui/calendar'
import { CalendarProps } from '../form/calendar-types'

export default function Calendar({
  date,
  setDate,
  handleCalendarSelect,
}: CalendarProps) {
  return (
    <Box
      mode='single'
      selected={date}
      onSelect={setDate}
      onDayClick={handleCalendarSelect}
      disabled={(dateDisabled: Date) =>
        dateDisabled <= new Date() || dateDisabled < new Date('1900-01-01')
      }
      initialFocus
      className='rounded-md border-none'
      classNames={{}}
    />
  )
}
