import React, { useContext } from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { TsocialNetworkValidation } from '../types/social-network'

interface FormFieldInputProps {
    fieldName: "facebook.username" | "facebook.visible" | "instagram.username" | "instagram.visible" | "reddit.username" | "reddit.visible" | "twitter.username" | "twitter.visible" | "discord.username" | "discord.visible"
}

export default function ToggleInput({
    fieldName,
}: FormFieldInputProps) {

    const { control } = useFormContext<TsocialNetworkValidation>()
    return (
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    <Label
                        className='relative inline-flex cursor-pointer items-center outline-none '
                        htmlFor={fieldName}
                    >
                        <FormControl>
                            <Input
                                className='peer sr-only outline-none'
                                type='checkbox'
                                aria-checked={field.value}
                                id={fieldName}
                                {...field}
                            />
                        </FormControl>
                        <div
                            aria-hidden='true'
                            className='h-6 w-11 cursor-pointer rounded-xl bg-[#E2E8F0] transition-all  peer-checked:bg-[#0F172A] peer-focus:outline-none peer-focus:ring-[#0F172A]'
                        />
                        <span
                            aria-hidden='true'
                            className='absolute left-1 top-[2px]  z-10 h-5 w-5 rounded-full bg-[#FFFFFF] shadow-md transition-all peer-checked:left-5'
                        />
                        <FormDescription className='pl-2'>Visibilidade</FormDescription>
                    </Label>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
