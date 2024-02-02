import { CalendarScheduling } from "..";
import useCustomForm from "../form/useCustomForm";

interface CalendarDesktopProps{
    date: Date 
    setDate: React.Dispatch<React.SetStateAction<Date>>}
export function CalendarDesktop({date,setDate}:CalendarDesktopProps) {
    const {
        handleCalendarSelect,
        handleGetValueHour,
      } = useCustomForm()
    return(
        <>
           <div className="flex justify-between gap-4">
            <div className='mr-auto '>
                    <CalendarScheduling.Calendar
                      date={date}
                      setDate={setDate}
                      handleCalendarSelect={() => handleCalendarSelect(date)}
                      /> 
                </div>
                <div>
                <section className='w-[120px] flex flex-col gap-3'>
                  <div>
                    <CalendarScheduling.TimeOptionsHeader date={date} />
                  </div>
                  <div className='flex flex-col gap-4'>
                  <CalendarScheduling.TimeOptions onSubmitForm={handleGetValueHour} />
                  </div>
                </section> 
              </div>
           </div>
        </>
    )
}