import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { CalendarScheduling } from '..'
import CalendarWithForm from '../calendarWithForm'
import { CalendarDesktop } from '../desktop/calendar-desktop'
import { CalendarMobile } from '../mobile/calendar-mobile'

export default {
  title: 'CalendarWithForm',
  component: CalendarWithForm,
  decorators: [
    Story => {
      return <div className='mx-auto max-w-[400px]'>{Story()}</div>
    },
  ],
} as Meta<typeof CalendarWithForm>

export const Desktop: StoryObj<typeof CalendarWithForm> = {
  decorators: [
    () => {
      const [date, setDate] = useState(new Date())

      return (
        <div className='mx-auto max-w-[400px]'>
          <CalendarScheduling.Root>
            <CalendarScheduling.FormRoot>
              <div className='w-full max-[900px]:hidden'>
                <CalendarDesktop
                  date={date}
                  setDate={setDate}
                />
              </div>
            </CalendarScheduling.FormRoot>
          </CalendarScheduling.Root>
        </div>
      )
    },
  ],
}

export const Mobile: StoryObj<typeof CalendarWithForm> = {
  decorators: [
    () => {
      const [date, setDate] = useState(new Date())
      return (
        <CalendarScheduling.Root>
          <CalendarScheduling.FormRoot>
            <div className='flex w-[900px] items-center justify-center py-5'>
              <CalendarMobile
                date={date}
                setDate={setDate}
              />
            </div>
          </CalendarScheduling.FormRoot>
        </CalendarScheduling.Root>
      )
    },
  ],
}
