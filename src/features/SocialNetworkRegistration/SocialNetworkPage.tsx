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
import useFormSocialNetwork from './hookform/useSocialNetWorkForm'
import { SchemaKey } from './hookform/types'
import { socialNetworks } from './utils/socialNetworks'
import ArrowRigth from './icons/arrowRigth'

export default function SocialNetworkPage() {
  const {
    handleSubmit,
    register,
    onSubmit,
    toggleVisibility,
    getValueSocialMediaVisible,
  } = useFormSocialNetwork()
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='my-auto mt-6 flex flex-col gap-3 '
    >
      <div className='flex flex-col items-center justify-center gap-4 px-2 '>
        {socialNetworks.map(network => {
          const registerName = network.name as SchemaKey
          const isValueVisible = getValueSocialMediaVisible(registerName)
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
                    {...register(`${registerName}.username`)}
                    autoComplete='off'
                    placeholder={`@${network.name}`}
                    text={`https://www.${network.name}.com/`}
                  />
                </SocialNetworkBox>
              </SocialNetworkBox>
              <div className='-top-1 flex items-center justify-between gap-2'>
                <SocialNetworkToggleInput
                  onClick={() =>
                    toggleVisibility(registerName, !isValueVisible)
                  }
                  text='Visibilidade'
                />
              </div>
            </SocialNetworkBox>
          )
        })}
      </div>
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
