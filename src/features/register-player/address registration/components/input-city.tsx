'use client'

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import Search from '@/components/icons/searchIcon'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import useLocalStorageGetItem from '../hooks/useLocalStorageGetItem'
import { addressRegistrationValidationT } from '../types/address-registration'
import OptionsCity from './options-city'

export default function InputCity() {
  const form = useFormContext<addressRegistrationValidationT>()
  const stateValue = form.watch('state')
  const errosInCity = form.formState.errors.city
  const valueOfTheStateInputForTheRequest = stateValue
  const [isFocused, setIsFocused] = useState(false)
  const parsedData =
    useLocalStorageGetItem<addressRegistrationValidationT>('form_data_adress')
  const [cityValue, setCityValue] = useState(parsedData?.city || '')
  const handleChangeValeu = (value: string) => {
    setCityValue(value)
  }

  return (
    <div className='relative w-full'>
      <FormField
        control={form.control}
        name='city'
        render={({ field }) => (
          <FormItem>
            <FormLabel
              className={`${errosInCity && 'text-red-500'} outline-none`}
            >
              Em qual cidade você mora?
            </FormLabel>
            <FormControl>
              <div>
                <div className='relative'>
                  <Input
                    placeholder='Selecione sua cidade'
                    {...field}
                    autoComplete='off'
                    value={cityValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 300)}
                    onChange={event => setCityValue(event.target.value)}
                    className='line-clamp-3 text-sm outline-none focus:ring-transparent focus-visible:ring-transparent'
                  />
                  <Search className='absolute right-3.5 top-3 bg-slate-50' />
                </div>
                {isFocused && (
                  <OptionsCity
                    uf={valueOfTheStateInputForTheRequest}
                    handleValueCity={handleChangeValeu}
                    cityValue={cityValue}
                  />
                )}
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
