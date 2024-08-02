import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'

export default function CheckboxLiveAbroad() {
  const { control, setValue } = useFormContext<addressRegistrationValidationT>()
  function handleIsDisabled() {
    setValue('state', '')
    setValue('city', '')
  }
  return (
    <FormField
      control={control}
      name='liveAbroad'
      render={({ field }) => (
        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md pb-8 pt-6'>
          <FormLabel
            htmlFor='liveInBrazil'
            className='flex cursor-pointer items-start justify-center space-x-3  space-y-0 rounded-md'
            onChange={() => handleIsDisabled()}
          >
            <FormControl>
              <Checkbox
                id='liveAbroad'
                checked={field.value}
                onCheckedChange={field.onChange}
                className='bg-[#FAFAFA]'
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormDescription className='text-neutral-400'>
                Não moro no Brasil
              </FormDescription>
            </div>
          </FormLabel>
        </FormItem>
      )}
    />
  )
}
