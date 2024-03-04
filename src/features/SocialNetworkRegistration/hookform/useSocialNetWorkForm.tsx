import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Schema } from './types'
import { schema } from './validation'

export default function useFormSocialNetwork() {
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      facebook: {
        visible: false,
      },
      instagram: {
        visible: false,
      },
      reddit: {
        visible: false,
      },
      tiktok: {
        visible: false,
      },
      twitter: {
        visible: false,
      },
    },
  })

  const onSubmit = (data: Schema) => console.table(data)

  const getValueSocialMediaVisible = (
    socialMediaName: keyof Schema,
  ): boolean => {
    const values = getValues()
    const isValueVisible = values[socialMediaName]?.visible
    if (isValueVisible !== undefined) {
      return isValueVisible
    }
    return false
  }

  const toggleVisibility = (
    socialMediaName: keyof Schema,
    value: boolean,
  ): void => {
    setValue(`${socialMediaName}.visible`, value)
  }
  return {
    handleSubmit,
    reset,
    register,
    onSubmit,
    errors,
    toggleVisibility,
    getValueSocialMediaVisible,
  }
}
