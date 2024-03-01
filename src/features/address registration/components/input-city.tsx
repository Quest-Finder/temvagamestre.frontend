'use client'

import React from 'react'
import { UseFormReturn, useFormContext } from 'react-hook-form'
import {
    FormField,
    FormLabel,
    FormItem,
    FormControl,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { addressRegistrationValidationT } from '../types/address-registration'


export default function InputCity() {
    const form = useFormContext<addressRegistrationValidationT>()
    return (
        <div className='relative w-full'>
            <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            className={`${form.formState.errors.city && 'text-red-500'} `}
                        >
                            Em qual cidade você mora?
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Selecione sua cidade'
                                {...field}
                                autoComplete='off'
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    )
}
