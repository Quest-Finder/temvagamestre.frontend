'use client'

import { Button } from '@/components/ui/button'
import { FormProvider } from 'react-hook-form'
import { FormTitle } from '../utils/title-form'
import { Input } from './components'
import useFormSocialMedia from './hook/useFormSocialNetWork'
import { useSubmitSocialNetWokr } from './hook/useSubmitSocialNetWokr'
import { getIconByName } from './utils/get-icon-by-name'

export default function SocialNetworkRegistration() {
  const form = useFormSocialMedia()

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(useSubmitSocialNetWokr)}
        id='form-social-media'
        className='flex min-h-screen flex-col items-center justify-center gap-14 '
      >
        <FormTitle>Insira suas redes sociais</FormTitle>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('facebook')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1>URL</h1>
            <Input.InputSocialMedia
              fieldName='facebook'
              placeholder='https://www.facebook.com/@firstname'
            />
            <Input.ToggleInput fieldName='facebook.visible' />
          </div>
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('instagram')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1>URL</h1>
            <Input.InputSocialMedia
              fieldName='instagram'
              placeholder='https://www.instagram.com/@firstname'
            />
            <Input.ToggleInput fieldName='instagram.visible' />
          </div>
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('twitter')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1>URL</h1>
            <Input.InputSocialMedia
              fieldName='twitter'
              placeholder='https://www.twitter.com/@firstname'
            />
            <Input.ToggleInput fieldName='twitter.visible' />
          </div>
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('discord')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1>URL</h1>
            <Input.InputSocialMedia
              fieldName='discord'
              placeholder='https://www.discord.com/@firstname'
            />
            <Input.ToggleInput fieldName='discord.visible' />
          </div>
        </Input.Wrapper>

        <div className='animate-wiggle mt-10 flex flex-col-reverse items-center gap-10  sm:flex-row'>
          <Button
            variant='ghost'
            size='lg'
            className='min-h-[52px] w-full max-w-[281px] rounded-md p-4 transition-all hover:bg-[#CCFBF1] hover:text-[#7C7C7C]'
          >
            Prefiro responder em outro momento
          </Button>
          <Button
            type='submit'
            className='animate-wiggle min-h-[3.5rem] min-w-[200px] max-w-[13.375rem] px-8 py-4'
          >
            Salvar e Continuar
            {/* <ArrowLeft /> */}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
