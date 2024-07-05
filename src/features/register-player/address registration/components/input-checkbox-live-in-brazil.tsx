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

export default function InputLiveInBrazil() {
  const { control, setValue } = useFormContext<addressRegistrationValidationT>()
  function handleIsDisabled() {
    setValue('state', '')
    setValue('city', '')
  }

  return (
    <FormField
      control={control}
      name='liveInBrazil'
      render={({ field }) => (
        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4'>
          <FormLabel
            htmlFor='liveInBrazil'
            className='flex cursor-pointer items-start space-x-3 space-y-0  rounded-md p-4'
            onChange={() => handleIsDisabled()}
          >
            <FormControl>
              <Checkbox
                id='liveInBrazil'
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
