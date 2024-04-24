import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { TsocialNetworkValidation } from '../types/social-network'
import { keysFieldValues } from '../utils/parse-validation-in-array'

interface InputSocialMediaProps {
  fieldName: keysFieldValues
  placeholder: string
}
export default function InputSocialMedia({
  fieldName,
  placeholder,
}: InputSocialMediaProps) {
  const { control } = useFormContext<TsocialNetworkValidation>()

  return (
    <FormField
      control={control}
      name={`${fieldName}.username`}
      render={({ field }) => (
        <FormItem className=''>
          <FormControl>
            <Input
              className='w-full min-[415px]:w-[20.375rem]'
              placeholder={placeholder}
              onChange={field.onChange}
              onBlur={field.onBlur}
              maxLength={255}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
