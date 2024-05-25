import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormContext } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'
import { states } from '../utils/estates'

export default function InputState() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<addressRegistrationValidationT>()
  const valueInputLiveIBrazil = watch('liveInBrazil')
  return (
    <FormField
      control={control}
      name='state'
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className={`
            ${valueInputLiveIBrazil && 'text-neutral-300'}
            ${errors.state && 'text-red-500'}
            `}
          >
            Insira seu estado
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={valueInputLiveIBrazil}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder='Selecione seu estado' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {states.map(({ label, value }) => (
                <SelectItem
                  key={value}
                  value={value}
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
