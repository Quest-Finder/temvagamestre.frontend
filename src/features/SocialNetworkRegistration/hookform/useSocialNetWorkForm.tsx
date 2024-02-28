import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Schema } from './types'
import { schema } from './validation'

export default function useFormSocialNetwork() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = () => {}

  return {
    handleSubmit,
    reset,
    register,
    onSubmit,
    errors,
  }
}
