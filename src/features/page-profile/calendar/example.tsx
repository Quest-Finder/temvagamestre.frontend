'use client'

import React, { useState } from 'react'
import useCustomForm from './form/useCustomForm'
import { CalendarScheduling } from '.'
import useWindowDimensions from '@/hooks/useWindowWidth'
import { cn } from '@/lib/utils'
import { CalendarDesktop } from './desktop/calendar-desktop'
import { CalendarMobile } from './mobile/calendar-mobile'

export default function CalendarWithForm() {
  const [date, setDate] = useState<Date>(new Date())

  const {
    onSubmit,
    handleSubmit,
  } = useCustomForm()

  return (
    <>
      <CalendarScheduling.Root>
        <div className='min-[704px]:col-span-12 col-span-8 row-span-1 h-8 '>
        <CalendarScheduling.Text
          className={cn('h-8 text-2xl font-semibold leading-7 text-zinc-800')}
          >
          Datas disponiveis
        </CalendarScheduling.Text>
        </div>
        <div className='col-span-12 row-span-2 flex'>
        <CalendarScheduling.FormRoot
          onSubmit={handleSubmit(onSubmit)}
          >
            <div className='max-[900px]:hidden w-full'>
              <CalendarDesktop date={date} setDate={setDate}/>
            </div>
            <div className='min-[900px]:hidden '>
              <CalendarMobile date={date} setDate={setDate}/>
            </div>
          </CalendarScheduling.FormRoot>
       </div>
     
    </CalendarScheduling.Root>
    </>
  )
}
