import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { addressRegistrationValidationT } from '../types/address-registration'

export default function InputLiveInBrazil() {
  const form = useFormContext<addressRegistrationValidationT>()

  return (
    <FormField
      name='liveInBrazil'
      control={form.control}
      render={({ field }) => (
        <FormItem className='mr-auto flex flex-row items-start space-x-3 space-y-0 p-4'>
          <Checkbox.Wrapper>
            <FormControl>
              <Checkbox.Check
                title='Não moro no Brasi'
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>Não moro no Brasil</FormLabel>
          </Checkbox.Wrapper>
        </FormItem>
      )}
    />
  )
}
