import { useEffect } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { generateDaysOfAMonth } from '../helper/generateDaysOfAMonth'
import { generateXYearsUntillToday } from '../helper/generateXYearsUntillToday'
import { monthsArray } from '../helper/monthsArray'
import { useStateDateOfBirth } from '../hooks/useStateDateOfBirth'

interface DateOfBirthProps {
  onSelectedDate: (date: string) => void
}

export function DateOfBirth({ onSelectedDate }: DateOfBirthProps) {
  const { handleDay, handleMonth, handleYear, dateForm } = useStateDateOfBirth()

  useEffect(() => {
    if (dateForm.day !== '' && dateForm.month !== '' && dateForm.yaer !== '') {
      onSelectedDate(`${dateForm.month}-${dateForm.day}-${dateForm.yaer}`)
    }
  }, [dateForm, onSelectedDate])

  return (
    <div className='flex justify-between gap-2'>
      <Select
        onValueChange={e => handleDay(e)}
        value={dateForm.day}
      >
        <SelectTrigger className='w-16'>
          <SelectValue placeholder='Dia' />
        </SelectTrigger>
        <SelectContent>
          {generateDaysOfAMonth().map(day => {
            return (
              <SelectItem
                key={day}
                value={day.toString()}
              >
                {day}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>

      <Select
        onValueChange={e => handleMonth(e)}
        value={dateForm.month}
      >
        <SelectTrigger className='w-40'>
          <SelectValue placeholder='Selecionar mes' />
        </SelectTrigger>
        <SelectContent>
          {monthsArray.map(mes => {
            return (
              <SelectItem
                key={mes.value}
                value={mes.value.toString()}
              >
                {mes.name}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>

      <Select
        onValueChange={e => handleYear(e)}
        value={dateForm.yaer}
      >
        <SelectTrigger className='w-20'>
          <SelectValue placeholder='Ano' />
        </SelectTrigger>
        <SelectContent>
          {generateXYearsUntillToday(100).map(ano => {
            return (
              <SelectItem
                key={ano}
                value={ano.toString()}
              >
                {ano}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
