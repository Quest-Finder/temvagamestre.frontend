import useWindowDimensions from "@/hooks/useWindowWidth";
import { CalendarScheduling } from "..";
import useCustomForm from "../form/useCustomForm";

interface CalendarMobileProps{
    date: Date 
    setDate: React.Dispatch<React.SetStateAction<Date>>}
export function CalendarMobile({date,setDate}:CalendarMobileProps) {
    const {
        handleCalendarSelect,
        handleGetValueHour,
        handleSubmitForm
      } = useCustomForm()

    return(
        <>
        <div className="w-full flex flex-col items-center justify-center gap-4 pb-4 mb-4">
            <div className=" w-full flex items-center justify-center">
                <CalendarScheduling.Calendar
                    date={date}
                    setDate={setDate}
                    handleCalendarSelect={() => handleCalendarSelect(date)}
                /> 
            </div>
            <div className="flex items-center justify-start max-w-[350px]">
                <div>
                  <CalendarScheduling.TimeOptionsHeader date={date} />
                </div>
                <div className="flex gap-4 overflow-auto invisible-scrollbar">
                    <CalendarScheduling.TimeOptions onSubmitForm={handleGetValueHour} />
                </div>
            </div>
        </div>
            <div className="w-full pb-4">
                <CalendarScheduling.ButtonMobile handleSubmitForm={handleSubmitForm}/>
            </div>
        </>
    )
}