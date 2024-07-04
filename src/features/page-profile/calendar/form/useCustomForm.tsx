import useWindowDimensions from '@/hooks/useWindowWidth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
  const { width } = useWindowDimensions()
  const isMobile = width < 835

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
