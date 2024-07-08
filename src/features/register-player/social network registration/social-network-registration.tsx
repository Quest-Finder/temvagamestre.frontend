'use client'

import { Button } from '@/components/ui/button'
import { RegisterRoutes } from '@/services/routers'
import { FormProvider } from 'react-hook-form'
import ButtonNextPage from '../utils/button-next-page'
import { FormTitle } from '../utils/title-form'
import { Input as CustomInput } from './components'
import { FetchSocialNetworks } from './hook/fecth-social-networks'
import useFormSocialMedia from './hook/useFormSocialNetWork'
import { FielName } from './types/social-network'
import { getIconByName } from './utils/get-icon-by-name'

export default function SocialNetworkRegistration() {
  const { form, isDisabled, onSubmit, setValueId } = useFormSocialMedia()
  const { data } = FetchSocialNetworks()

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id='form-social-media'
        className='flex flex-col items-center justify-center gap-14 '
      >
        <FormTitle>Insira suas redes sociais</FormTitle>

        {data.map(({ id, name }) => {
          const networkName = name.toLocaleLowerCase()
          return (
            <CustomInput.Wrapper key={id}>
              <CustomInput.Icon IconName={getIconByName(networkName)} />
              <div className='flex flex-col items-start justify-start gap-2'>
                <h1 className='font-notoSans text-sm font-normal leading-5 text-[#0A0A0A]'>
                  URL
                </h1>
                <CustomInput.InputSocialMedia
                  fieldName={networkName as FielName}
                  placeholder='https://www.facebook.com/@firstname'
                  onClick={() => setValueId(networkName as FielName, id)}
                />
                <CustomInput.ToggleInput fieldName={networkName as FielName} />
              </div>
            </CustomInput.Wrapper>
          )
        })}

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
