import { useFormContext } from 'react-hook-form'

import { FormField, FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { addressRegistrationValidationT } from '../types/address-registration'
import { states } from '../utils/estates'

export default function InputState() {
  const form = useFormContext<addressRegistrationValidationT>()

  return (
    <FormField
      name='state'
      control={form.control}
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <FormLabel
            className={` ${form.formState.errors.state && 'text-red-500'} `}
          >
            Em qual estado você mora?
          </FormLabel>

          <SelectTrigger className='mt-2 focus-visible:ring-transparent'>
            <SelectValue placeholder='Selecione seu estado' />
          </SelectTrigger>
          <SelectContent className='bg-neutral-50'>
            <SelectGroup>
              {states.map(option => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
