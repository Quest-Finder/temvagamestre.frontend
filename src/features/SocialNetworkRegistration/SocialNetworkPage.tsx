'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
  SocialNetworkBox,
  SocialNetworkIcon,
  SocialNetworkInput,
  SocialNetworkText,
  SocialNetworkToggleInput,
} from './socialNetworkRegistration'
import { TrashIcon } from './icons/trash'
import useFormSocialNetwork from './hookform/useSocialNetWorkForm'
import { SchemaKey } from './hookform/types'
import { socialNetworks } from './utils/socialNetworks'
import ArrowRigth from './icons/arrowRigth'

export default function SocialNetworkPage() {
  const { handleSubmit, register, onSubmit, errors } = useFormSocialNetwork()
  const hasErrorInForm = Object.keys(errors).length > 0
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='my-auto mt-6 flex flex-col gap-3 '
    >
      <div className='flex flex-col items-center justify-center gap-4 px-2 '>
        {socialNetworks.map(network => {
          const registerName = network.name as SchemaKey
          return (
            <SocialNetworkBox
              key={network.id}
              asCol
            >
              <SocialNetworkBox>
                <SocialNetworkIcon icon={network.icon} />
                <SocialNetworkBox asCol>
                  <SocialNetworkText
                    text={network.label}
                    variant='secondary'
                  />
                  <SocialNetworkInput
                    {...register(registerName)}
                    autoComplete='off'
                    placeholder={`@${network.name}`}
                    text={`https://www.${network.name}.com/`}
                  />
                </SocialNetworkBox>
              </SocialNetworkBox>
              <div className='-top-1 flex items-center justify-between gap-2'>
                <SocialNetworkToggleInput text='Visibilidade' />
                <SocialNetworkIcon
                  icon={TrashIcon}
                  text='Visibilidade'
                />
              </div>
            </SocialNetworkBox>
          )
        })}
      </div>
      {hasErrorInForm && (
        <div className='min-h-12 absolute bottom-5 right-8 flex w-1/4 animate-bounce items-center justify-center rounded-xl bg-[#ff0000]/90 py-2'>
          <p className='text-center text-sm font-extrabold text-neutral-50'>
            Pelo menos uma rede social deve ser selecionada.
          </p>
        </div>
      )}
      <div className='max-w-[430px]:justify-between mb-10 mt-8 flex max-w-[527px] flex-wrap-reverse items-center justify-center gap-10'>
        <SocialNetworkText text='Prefiro responder em outro momento' />
        <Button type='submit'>
          proximo
          <ArrowRigth />
        </Button>
      </div>
    </form>
  )
}
