import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TsocialNetworkValidation, keysFieldValues } from '../types/social-network'
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface InputSocialMediaProps {
    fieldName: keysFieldValues
    placeholder: string

}
export default function InputSocialMedia({ fieldName, placeholder }: InputSocialMediaProps) {
    const { control } = useFormContext<TsocialNetworkValidation>()

    return (

        <FormField
            control={control}
            name={`${fieldName}.username`}
            render={({ field }) => (
                <FormItem
                    className=''
                >
                    <FormControl
                    >
                        <Input
                            className='w-[10.625rem] min-[415px]:w-[20.375rem]'
                            placeholder={placeholder}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            maxLength={255}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
