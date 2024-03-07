import { FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

const Meses = [
  { name: 'Janeiro', value: 1 },
  { name: 'Fevereiro', value: 2 },
  { name: 'Março', value: 3 },
  { name: 'Abril', value: 4 },
  { name: 'Maio', value: 5 },
  { name: 'Junho', value: 6 },
  { name: 'Julho', value: 7 },
  { name: 'Agosto', value: 8 },
  { name: 'Setembro', value: 9 },
  { name: 'Outubro', value: 10 },
  { name: 'Novembro', value: 11 },
  { name: 'Dezembro', value: 12 },
]

function generateDayFromMonth() {
  const days = []
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 31; i++) {
    days.push(i)
  }
  return days
}

function generateYearsUntillTodayFrom(oldestYear: number) {
  const currentDate = new Date().getFullYear()
  const maxOldDate = currentDate - oldestYear
  const years = []
  // eslint-disable-next-line no-plusplus
  for (let i = currentDate; i > maxOldDate; i--) {
    years.push(i)
  }
  return years
}

interface DateOfBirthProps {
  onSelectedDate: (date: string) => void
}

export function DateOfBirth({ onSelectedDate }: DateOfBirthProps) {
  const [dayForm, setDayForm] = useState('')
  const [monthForm, setMonthForm] = useState('')
  const [yearForm, setYearForm] = useState('')

  useEffect(() => {
    const handleSelectDate = () => {
      if (dayForm !== '' && monthForm !== '' && yearForm !== '') {
        onSelectedDate(`${monthForm}-${dayForm}-${yearForm}`)
      }
    }
    handleSelectDate()
  }, [dayForm, monthForm, yearForm, onSelectedDate])

  return (
    <>
      <FormLabel>Data de nascimento*</FormLabel>
      <div className='flex gap-6'>
        <Select onValueChange={e => setDayForm(e)}>
          <SelectTrigger>
            <SelectValue placeholder='Dia' />
          </SelectTrigger>
          <SelectContent>
            {generateDayFromMonth().map(day => {
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
          <SelectTrigger>
            <SelectValue placeholder='Selecionar mes' />
          </SelectTrigger>
          <SelectContent>
            {Meses.map(mes => {
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
          <SelectTrigger>
            <SelectValue placeholder='Ano' />
          </SelectTrigger>
          <SelectContent>
            {generateYearsUntillTodayFrom(100).map(ano => {
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
    </>
  )
}
