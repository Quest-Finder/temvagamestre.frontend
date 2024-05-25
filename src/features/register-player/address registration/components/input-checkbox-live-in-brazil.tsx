import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { useIsDisabled } from '../store/store'

export default function InputLiveInBrazil() {
  const { control, setValue } = useFormContext()
  const { setIsDisabled } = useIsDisabled()
  function handleIsDisabled() {
    setValue('state', undefined)
    setValue('city', undefined)
    setIsDisabled(false)
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
