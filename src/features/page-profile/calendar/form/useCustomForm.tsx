import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useWindowDimensions from '@/hooks/useWindowWidth'
import { Schema } from './calendar-types'
import { schema } from './validation'

export default function useCustomForm() {
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const { isWidthMobile } = useWindowDimensions(835)
  const isMobile = isWidthMobile

  function onSubmit(data: Schema): void {
    console.log(data)
    reset()
  }
  const handleSubmitForm = () => {
    if (errors) {
      return
    }
    handleSubmit(onSubmit)
  }

  const handleCalendarSelect = (date: Date | undefined) => {
    const dataSelecionada = date?.toLocaleDateString('pt-BR') as string
    setValue('date', dataSelecionada)
  }

  const handleGetValueHour = (hour: string) => {
    setValue('hour', hour)
    if (isMobile) {
      return
    }
    console.log('ola')
    handleSubmitForm()
  }

  return {
    onSubmit,
    handleSubmit,
    reset,
    handleCalendarSelect,
    handleSubmitForm,
    handleGetValueHour,
  }
}
