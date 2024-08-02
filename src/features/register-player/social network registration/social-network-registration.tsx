'use client'

import { Button } from '@/components/ui/button'
import { ButtonSkipForm } from '@/components/ui/button-skip-form'
import { RegisterRoutes } from '@/services/routers'
import { FormProvider } from 'react-hook-form'
import * as FormText from '../FormText.json'
import { FormTitle } from '../utils/title-form'
import { Input } from './components'
import useFormSocialMedia from './hook/useFormSocialNetWork'
import useSubmitSocialNetWokr from './hook/useSubmitSocialNetWokr'
import { getIconByName } from './utils/get-icon-by-name'
import { parseSocialValidationInArray } from './utils/parse-validation-in-array'

export default function SocialNetworkRegistration() {
  const socialMediaMap = parseSocialValidationInArray()
  const form = useFormSocialMedia()
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(
          useSubmitSocialNetWokr(RegisterRoutes.AboutYou),
        )}
        id='form-social-media'
        className='flex min-h-screen flex-col items-center justify-center gap-14 '
      >
        <FormTitle>{FormText.socialMedia.title}</FormTitle>
        {socialMediaMap.map(({ name }) => (
          <Input.Wrapper key={name}>
            <Input.Icon IconName={getIconByName(name)} />
            <div className='flex flex-col items-start justify-start  gap-2'>
              <h1>URL</h1>
              <Input.InputSocialMedia
                fieldName={name}
                placeholder={`https://www.${name}.com/@firstname`}
              />
              <Input.ToggleInput fieldName={`${name}.visible`} />
            </div>
          </Input.Wrapper>
        ))}
        <div className='animate-wiggle mt-10 flex flex-col-reverse items-center gap-10  sm:flex-row'>
          <ButtonSkipForm
            content='Não responder nesse momento'
            href={RegisterRoutes.AboutYou}
          />
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
