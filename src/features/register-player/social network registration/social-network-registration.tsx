'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FormProvider } from 'react-hook-form'
import * as FormText from '../FormText.json'
import { useFetchData } from '../game-styles/hooks/useFetchData'
import { FormTitle } from '../utils/title-form'
import { Input as CustomInput } from './components'
import useFormSocialMedia from './hook/useFormSocialNetWork'
import { getIconByName } from './utils/get-icon-by-name'

export interface SocialMedia {
  id: string
  name: string
  baseUri: string
}
export default function SocialNetworkRegistration() {
  const { form, isDisabled, onSubmit, setValueUserLink } = useFormSocialMedia()
  const { data } = useFetchData<SocialMedia[]>('/social-media')

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id='form-social-media'
        className='grid place-items-center'
      >
        <div className='mx-auto flex min-h-[620px] w-full max-w-[880px] flex-col items-center justify-center gap-9 px-2'>
          <div className='relative grid h-24 w-full place-items-center'>
            <FormTitle className='absolute top-1/3 '>
              {FormText.socialMedia.title}
            </FormTitle>
          </div>

          {data?.map(({ id, name, baseUri }, i) => {
            const networkName = name.toLocaleLowerCase()
            const fieldName = `${i}.userLink`

            return (
              <div
                key={id}
                className='flex h-[68px] w-full max-w-[396px] flex-row items-center gap-4'
              >
                <CustomInput.Icon IconName={getIconByName(networkName)} />
                <div className='flex w-full  flex-col items-start justify-start  gap-2'>
                  <h1
                    className={cn(
                      'h-5 font-notoSans text-sm font-normal not-italic leading-5 text-[#0A0A0A]',
                    )}
                  >
                    URL
                  </h1>

                  <Input
                    id={fieldName}
                    className={cn(
                      'h-10 w-full max-w-[340px] rounded-lg border-[#BDBDBD] bg-[#FFFFFF] py-2 pl-3 pr-14',
                    )}
                    placeholder={baseUri}
                    onChange={e => setValueUserLink(id, e.target.value, i)}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className='mx-auto mt-8 flex h-24 flex-wrap items-center justify-center  gap-8'>
          <p className='text-sm font-normal leading-5 text-neutral-500'>
            Não responder nesse momento
          </p>
          <Button
            type='submit'
            className='animate-wiggle min-h-[3.5rem] min-w-[200px] max-w-[13.375rem] px-8 py-4'
            disabled={isDisabled}
          >
            Salvar e Continuar
            {/* <ArrowLeft /> */}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
