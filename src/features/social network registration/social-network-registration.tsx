'use client'
import React from 'react'
import useFormSocialMedia from './hook/useFormSocialNetWork'
import { parseSocialValidationInArray } from './utils/parse-validation-in-array'
import { FormProvider } from 'react-hook-form'
import { Input } from './components'
import { getIconByName } from './utils/get-icon-by-name'
import { Button } from '@/components/ui/button'
import useSubmitFormAddressRegistration from './hook/useSubmitSocialNetWokr'

export default function SocialNetworkRegistration() {
    const { form } = useFormSocialMedia()
    const socialMediaMap = parseSocialValidationInArray()
    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(useSubmitFormAddressRegistration(form, '/cadastro/sobre-voce'))}
                id='form-social-media'
                className='flex flex-col items-center justify-center gap-14 min-h-screen '
            >

                {socialMediaMap.map(({ name }) => (
                    <Input.Wrapper key={name}>
                        <Input.Icon Icon={getIconByName(name)} />
                        <div
                            className='flex flex-col items-start justify-start  gap-2'
                        >
                            <h1>URL</h1>
                            <Input.InputSocialMedia fieldName={name} placeholder={`https://www.${name}.com/@firstname`} />
                            <Input.ToggleInput fieldName={`${name}.visible`} />
                        </div>
                    </Input.Wrapper>
                ))}
                <div className='mt-10 flex animate-wiggle flex-col-reverse items-center gap-10  sm:flex-row'>
                    <p className='text-sm font-normal leading-5 text-neutral-500'>
                        Não responder nesse momento
                    </p>
                    <Button
                        type='submit'

                        className='min-h-[3.5rem] min-w-[200px] max-w-[13.375rem] animate-wiggle px-8 py-4'
                    >
                        Salvar e Continuar
                        {/* <ArrowLeft /> */}
                    </Button>
                </div>

            </form>
        </FormProvider>
    )
}
