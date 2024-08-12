import { CalendarScheduling } from '..'
import useCustomForm from '../form/useCustomForm'

interface CalendarMobileProps {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
}
export function CalendarMobile({ date, setDate }: CalendarMobileProps) {
  const { handleCalendarSelect, handleGetValueHour, handleSubmitForm } =
    useCustomForm()

  return (
    <>
      <div className='mb-4 flex w-full flex-col items-center justify-center gap-4 pb-4'>
        <div className='flex w-full items-center justify-center'>
          <CalendarScheduling.Calendar
            date={date}
            setDate={setDate}
            handleCalendarSelect={() => handleCalendarSelect(date)}
          />
        </div>
        <div className='flex max-w-[350px] items-center justify-start'>
          <div>
            <CalendarScheduling.TimeOptionsHeader date={date} />
          </div>
          <div className='invisible-scrollbar flex gap-4 overflow-auto'>
            <CalendarScheduling.TimeOptions onSubmitForm={handleGetValueHour} />
          </div>
        </div>
      </div>
      <div className='w-full pb-4'>
        <CalendarScheduling.ButtonMobile handleSubmitForm={handleSubmitForm} />
      </div>
    </>
  )
}
