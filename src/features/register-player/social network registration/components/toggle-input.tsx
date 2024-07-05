import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Toogle } from '@/components/ui/toggle'
import { useFormContext } from 'react-hook-form'
import { TsocialNetworkValidation } from '../types/social-network'

interface FormFieldInputProps {
  fieldName: 'facebook' | 'instagram' | 'reddit' | 'x' | 'discord'
}

export default function ToggleInput({ fieldName }: FormFieldInputProps) {
  const { control } = useFormContext<TsocialNetworkValidation>()
  return (
    <FormField
      control={control}
      name={`${fieldName}.visible`}
      render={({ field }) => (
        <FormItem>
          <Toogle.ToogleLabel fieldName={fieldName}>
            <FormControl>
              <Input
                className='peer sr-only outline-none '
                type='checkbox'
                id={fieldName}
                {...field}
                value={field.value ? 'true' : 'false'}
              />
            </FormControl>
            <Toogle.BackgroundToogle />
            <Toogle.ButtonToogle />
            <Toogle.ToogleDescripription text='Visibilidade' />
          </Toogle.ToogleLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
