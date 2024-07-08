import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { FielName, TsocialNetworkValidation } from '../types/social-network'

interface InputSocialMediaProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: FielName
  placeholder: string
}
export default function InputSocialMedia({
  fieldName,
  placeholder,
  ...props
}: InputSocialMediaProps) {
  const { control } = useFormContext<TsocialNetworkValidation>()

  return (
    <FormField
      control={control}
      name={`${fieldName}.userLink`}
      render={({ field: { onChange, onBlur } }) => (
        <FormItem className=''>
          <FormControl>
            <Input
              className=' w-full text-sm font-normal leading-3 placeholder:font-raleway placeholder:text-neutral-300 min-[415px]:w-[20.375rem]'
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              maxLength={255}
              {...props}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
