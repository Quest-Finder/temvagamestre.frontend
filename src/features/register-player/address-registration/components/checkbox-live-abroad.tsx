import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { addressRegistrationValidationT } from '../types/address-registration'

export default function CheckboxLiveAbroad() {
  const { control, setValue } = useFormContext<addressRegistrationValidationT>()
  function handleIsDisabled() {
    setValue('state', '')
    setValue('city', '')
  }
  return (
    <FormField
      name='liveAbroad'
      control={control}
      render={({ field }) => (
        <FormItem className='mr-auto flex flex-row items-start space-x-3 space-y-0 p-4'>
          <Checkbox.Wrapper>
            <FormControl>
              <Checkbox.Check
                title='Não moro no Brasi'
                checked={field.value}
                onCheckedChange={() => {
                  field.onChange()
                  handleIsDisabled()
                }}
              />
            </FormControl>
            <FormLabel>Não moro no Brasil</FormLabel>
          </Checkbox.Wrapper>
        </FormItem>
      )}
    />
  )
}
