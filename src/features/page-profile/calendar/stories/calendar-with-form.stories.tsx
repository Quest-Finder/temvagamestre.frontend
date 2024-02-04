import type { Meta, StoryObj } from '@storybook/react'
import CalendarWithForm from '../calendarWithForm'
import { CalendarScheduling } from '..'
import { CalendarDesktop } from '../desktop/calendar-desktop'
import { useState } from 'react'
import { CalendarMobile } from '../mobile/calendar-mobile'

export default { 
    title:'CalendarWithForm',
    component:CalendarWithForm ,
    decorators: [
        (Story) => {
          return (
            <div
             className='max-w-[400px] mx-auto'
            >
              {Story()}
            </div>
          )
        },
      ],
    } as Meta<typeof CalendarWithForm>
    
    
    export const Desktop: StoryObj<typeof CalendarWithForm> = {
        decorators: [
            (Story) => {
            const [date, setDate] = useState(new Date()); 

              return (
                <div
                 className='max-w-[400px] mx-auto'
                >
                  <CalendarScheduling.Root>
                    <CalendarScheduling.FormRoot>
                    <div className='max-[900px]:hidden w-full'>
                        <CalendarDesktop date={date} setDate={setDate}/>
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
            const [date, setDate] = useState(new Date()); 
              return (
                  <CalendarScheduling.Root>
                    <CalendarScheduling.FormRoot>
                        <div className='flex items-center justify-center w-[900px] py-5'>
                            <CalendarMobile date={date} setDate={setDate}/>
                       </div>
                    </CalendarScheduling.FormRoot>
                  </CalendarScheduling.Root>
              )
            },
          ],
    }
