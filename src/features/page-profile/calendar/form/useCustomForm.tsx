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

  // aqui e necessario passar o data: Schema como paramentro da função,nesse momento foi removido para evitar erros de lint
  function onSubmit(): void {
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
