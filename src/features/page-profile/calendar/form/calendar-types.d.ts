import { schema } from './validation'

export type Schema = z.infer<typeof schema>

export interface CalendarProps {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  handleCalendarSelect: (date: Date) => void
}
