import React from 'react'

import { Calendar as Box } from '@/components/ui/calendar'

import { CalendarProps } from '../form/calendar-types'

export default function Calendar({
  date,
  setDate,
  handleCalendarSelect,
}: CalendarProps) {
  const safeHandleCalendarSelect = (value: Date | undefined) => {
    if (value !== undefined) {
      setDate(value)
    }
  }
  return (
    <Box
      mode='single'
      selected={date}
      onSelect={safeHandleCalendarSelect}
      onDayClick={handleCalendarSelect}
      disabled={(dateDisabled: Date) =>
        dateDisabled < new Date(new Date().setDate(new Date().getDate() - 1))
      }
      initialFocus
      className='rounded-md border-none'
    />
  )
}
