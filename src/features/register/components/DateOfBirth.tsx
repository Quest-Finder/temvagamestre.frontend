import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import { generateDaysOfAMonth } from '../helper/generateDaysOfAMonth'
import { monthsArray } from '../helper/monthsArray'
import { generateXYearsUntillToday } from '../helper/generateXYearsUntillToday'

interface DateOfBirthProps {
  onSelectedDate: (date: string) => void
}

export function DateOfBirth({ onSelectedDate }: DateOfBirthProps) {
  const [dayForm, setDayForm] = useState('')
  const [monthForm, setMonthForm] = useState('')
  const [yearForm, setYearForm] = useState('')

  useEffect(() => {
    if (dayForm !== '' && monthForm !== '' && yearForm !== '') {
      onSelectedDate(`${monthForm}-${dayForm}-${yearForm}`)
    }
  }, [dayForm, monthForm, yearForm, onSelectedDate])

  return (
    <div className='flex justify-between'>
      <Select onValueChange={e => setDayForm(e)}>
        <SelectTrigger className='w-16'>
          <SelectValue placeholder='Dia' />
        </SelectTrigger>
        <SelectContent className='w-16'>
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

      <Select onValueChange={e => setMonthForm(e)}>
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

      <Select onValueChange={e => setYearForm(e)}>
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
