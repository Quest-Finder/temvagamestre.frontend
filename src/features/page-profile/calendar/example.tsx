'use client'

import React, { useState } from 'react'
import useCustomForm from './form/useCustomForm'
import { CalendarScheduling } from '.'
import useWindowDimensions from '@/hooks/useWindowWidth'
import Text from '@/components/typograph/text'
import { cn } from '@/lib/utils'
import GoogleProvider from './providers/google-provider'

export default function CalendarWithForm() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const {
    onSubmit,
    handleSubmit,
    handleCalendarSelect,
    handleSubmitForm,
    handleGetValueHour,
  } = useCustomForm()

  const { width } = useWindowDimensions()
  const isMobile: boolean = width <= 835
  return (
    <GoogleProvider>
      <main className='tablet:mx-auto w-full border-stone-300 px-5 pb-3 tablet:border-t-[1px] tablet:px-10'>
      <div className='mb-14 mt-6'>
        <Text
          className={cn('h-8 text-2xl font-semibold leading-7 text-zinc-800')}
        >
          Datas disponiveis
        </Text>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-4 flex w-full flex-wrap items-center justify-center gap-3 tablet:justify-between'
      >
        <div className='border-stone-300 tablet:border-r-[1px] tablet:pr-16'>
          <CalendarScheduling.Calendar
            date={date}
            setDate={setDate}
            handleCalendarSelect={() => handleCalendarSelect(date)}
          />
        </div>

        <section className='flex w-96 items-center gap-3 tablet:w-56 tablet:flex-col tablet:justify-start'>
          <CalendarScheduling.TimeOptionsHeader date={date} />
          <CalendarScheduling.TimeOptions onSubmitForm={handleGetValueHour} />
        </section>
        {isMobile && (
          <CalendarScheduling.ButtonMobile
            handleSubmitForm={handleSubmitForm}
          />
        )}
      </form>
    </main>
    </GoogleProvider>
  )
}
