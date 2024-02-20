import { formatDate } from '@/helpers/formatDate'
import useWindowDimensions from '@/hooks/useWindowWidth'
import { cn } from '@/lib/utils'
import React from 'react'
import { Text } from './typograph'

export default function TimeOptionsHeader({
  date,
}: {
  date: Date | undefined
}) {
  const dateToStringFormat = formatDate(date)
  const { isWidthMobile } = useWindowDimensions(835)
  const isMobile: boolean = isWidthMobile
  return (
    <section className='mt-auto flex flex-col items-center justify-center'>
      <Text
        className={cn(
          'font-inter text-teal-700 text-sm font-semibold leading-snug tablet:text-base',
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
