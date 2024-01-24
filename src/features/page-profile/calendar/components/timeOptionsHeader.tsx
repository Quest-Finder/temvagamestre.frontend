import Text from '@/components/typograph/text'
import { formatDate } from '@/helpers/formatDate'
import useWindowDimensions from '@/hooks/useWindowWidth'
import { cn } from '@/lib/utils'
import React from 'react'

export default function TimeOptionsHeader({
  date,
}: {
  date: Date | undefined
}) {
  const dateToStringFormat = formatDate(date)
  const { width } = useWindowDimensions()
  const isMobile: boolean = width <= 835
  return (
    <section className='flex w-56 flex-col items-center justify-center'>
      <Text
        className={cn(
          'font-inter text-sm font-semibold leading-snug text-teal-700 tablet:text-base',
        )}
      >
        {isMobile ? 'Horarios dsponiveis' : 'agendar'}
      </Text>
      <Text
        className={cn(
          'font-roboto text-sm font-light leading-loose text-neutral-600',
        )}
      >
        {dateToStringFormat}
      </Text>
    </section>
  )
}
