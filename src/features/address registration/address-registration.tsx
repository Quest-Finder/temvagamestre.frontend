"use client"
import React from 'react'
import useFormAddressRegistration from './hooks/useFormAddressRegistration'
import { FormProvider } from 'react-hook-form'
import InputState from './components/input-state'
import InputCity from './components/input-city'
import InputLiveInBrazil from './components/input-checkbox-live-in-brazil'
import { Button } from '@/components/ui/button'

export default function FormAddressRegistration() {
    const { form, onSubmit } = useFormAddressRegistration()
    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='mx-auto flex  min-h-[31.25rem] w-full max-w-[23.1875rem] flex-col items-center justify-between'
            >

                <div className='w-full flex flex-col gap-2'>
                    <InputState />
                    <InputCity />
                </div>


                <div className=' flex w-full flex-col gap-8'>
                    <InputLiveInBrazil />
                    <div className='flex flex-col items-center gap-8'>
                        <Button
                            type='submit'
                            className=' min-h-[3.5rem] w-full min-w-[6.25rem] max-w-[13.375rem] px-8 py-4 flex-wrap'
                        >
                            Salvar e Continuar
                            {/* <ArrowLeft /> */}
                        </Button>
                        <p className='text-center text-sm font-normal leading-5 text-neutral-500 '>
                            Prefiro responder em outro momento
                        </p>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
