import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Schema } from './calendar-types'
import { schema } from './validation'
import useWindowDimensions from '@/hooks/useWindowWidth'

export default function useCustomForm() {
    // Configuração do useForm com Zod para validação
  const { handleSubmit, setValue, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  // Obtenção da largura da janela para determinar se é um dispositivo móvel
  const { width } = useWindowDimensions()
  const isMobile: boolean = width <= 835

  // Função chamada ao enviar o formulário
  function onSubmit(data: Schema): void {
    // console.log(data)
  }
   // Função para manipular o envio do formulário
   const handleSubmitForm = () => {
    handleSubmit(onSubmit)(); // Chama a função de envio do formulário e, em seguida, limpa o formulário
    reset(); // Limpa os campos do formulário
  };

  // Função chamada ao selecionar uma data no calendário
  const handleCalendarSelect = (date: Date | undefined) => {
    const dataSelecionada = date?.toLocaleDateString('pt-BR') as string
    setValue('date', dataSelecionada)
  }
 
  const handleGetValueHour = (hour: string) => {
    setValue('hour', hour); // Define o valor do campo 'hour' no formulário
    if (isMobile) {
      return; // Se for um dispositivo móvel, não envia o formulário automaticamente
    }
    handleSubmitForm(); // Se não for um dispositivo móvel, envia automaticamente o formulário
  };

  return {
    onSubmit,
    handleSubmit,
    reset,
    handleCalendarSelect,
    handleSubmitForm,
    handleGetValueHour,
  }
}