'use client'

import { Button } from '@/components/ui/button'
import { RegisterRoutes } from '@/services/routers'
import { FormProvider } from 'react-hook-form'
import ButtonNextPage from '../utils/button-next-page'
import { FormTitle } from '../utils/title-form'
import { Input } from './components'
import useFormSocialMedia from './hook/useFormSocialNetWork'
import { getIconByName } from './utils/get-icon-by-name'

export default function SocialNetworkRegistration() {
  const { form, isDisabled, onSubmit } = useFormSocialMedia()

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id='form-social-media'
        className='flex flex-col items-center justify-center gap-14 '
      >
        <FormTitle>Insira suas redes sociais</FormTitle>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('facebook')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1 className='font-notoSans text-sm font-normal leading-5 text-[#0A0A0A]'>
              URL
            </h1>
            <Input.InputSocialMedia
              fieldName='facebook'
              placeholder='https://www.facebook.com/@firstname'
            />
            <Input.ToggleInput fieldName='facebook' />
          </div>
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('instagram')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1 className='font-notoSans text-sm font-normal leading-5 text-[#0A0A0A]'>
              URL
            </h1>
            <Input.InputSocialMedia
              fieldName='instagram'
              placeholder='https://www.instagram.com/@firstname'
            />
            <Input.ToggleInput fieldName='instagram' />
          </div>
        </Input.Wrapper>

        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('reddit')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1 className='font-notoSans text-sm font-normal leading-5 text-[#0A0A0A]'>
              URL
            </h1>
            <Input.InputSocialMedia
              fieldName='twitter'
              placeholder='https://www.reddit.com/@firstname'
            />
            <Input.ToggleInput fieldName='reddit' />
          </div>
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('discord')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1 className='font-notoSans text-sm font-normal leading-5 text-[#0A0A0A]'>
              URL
            </h1>
            <Input.InputSocialMedia
              fieldName='discord'
              placeholder='https://www.discord.com/@firstname'
            />
            <Input.ToggleInput fieldName='discord' />
          </div>
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon IconName={getIconByName('twitter')} />
          <div className='flex flex-col items-start justify-start  gap-2'>
            <h1 className='font-notoSans text-sm font-normal leading-5 text-[#0A0A0A]'>
              URL
            </h1>
            <Input.InputSocialMedia
              fieldName='twitter'
              placeholder='https://www.twitter.com/@firstname'
            />
            <Input.ToggleInput fieldName='twitter' />
          </div>
        </Input.Wrapper>

        <div className='animate-wiggle mt-10 flex flex-col-reverse items-center gap-10  sm:flex-row'>
          <ButtonNextPage path={RegisterRoutes.AboutYou} />
          <Button
            type='submit'
            className='animate-wiggle min-h-[3.5rem] min-w-[200px] max-w-[13.375rem] px-8 py-4'
            disabled={!isDisabled}
          >
            Salvar e Continuar
            {/* <ArrowLeft /> */}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
