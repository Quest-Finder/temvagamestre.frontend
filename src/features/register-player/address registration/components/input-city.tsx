'use client'

import Search from '@/components/icons/searchIcon'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'
import OptionsCity from './options-city'

export default function InputCity() {
  const form = useFormContext<addressRegistrationValidationT>()
  const stateValue = form.watch('state')
  const isDisabled = form.watch('state').length <= 0
  const valueOfTheStateInputForTheRequest = stateValue

  return (
    <div className='relative flex w-full flex-col gap-2'>
      <FormField
        control={form.control}
        name='city'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='font-notoSans text-sm font-normal leading-5 '>
              Em qual cidade você mora?
            </FormLabel>
            <FormControl>
              <div>
                <div className='relative'>
                  <Input
                    placeholder='Selecione sua cidade'
                    {...field}
                    autoComplete='off'
                    value={field.value}
                    disabled={isDisabled}
                    defaultChecked={false}
                    className='placeholder:font-raleway min-h-[40px] max-w-[371px] rounded-md border border-[#D4D4D4] bg-[#FFFFFF] font-notoSans text-base   font-normal text-[#737373] placeholder:text-base'
                  />
                  <Search className='absolute left-[85%] top-[35%] translate-x-2/4	 bg-slate-50' />
                </div>

                <div className='relative pt-2'>
                  <OptionsCity
                    uf={valueOfTheStateInputForTheRequest}
                    cityValue={form.getValues('city')}
                  />
                  <Search className='absolute left-[80%] top-[35%] translate-x-2/4	 bg-slate-50' />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
