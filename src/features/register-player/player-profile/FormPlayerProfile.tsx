'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Arrow } from '@/components/icons/Arrow'
import { FormPlayerProfileType } from './types/palyerProfileTypes'
import Image from 'next/image'

import { mockFormPlayerProfile } from './mock'

import { getRpgImage, getRpgStyling, getRpgImageColor } from './helpers/getRpgStyle'
import { FormTitle } from '../utils/title-form'
import { FormAditionalText } from "./components/FormAditionalText"
import { cn } from "@/lib/utils"
import { useFormPlayerProfile } from "./hooks/useFormPlayerProfile"

export function FormPlayerProfile() {
  const { palyerProfileTypes, isLoading, form} = useFormPlayerProfile()

  function onSubmit(data: FormPlayerProfileType) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <div>
        <FormAditionalText>
          Olá! Para aprimorarmos sua experiência no TVM, por favor, responda algumas perguntas.
        </FormAditionalText>
        <FormTitle>
          Escolha o perfil de jogador que mais se alinha com seus interesses.
        </FormTitle>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
        <FormField
          control={form.control}
          name='playerProfileId'
          render={() => (
            <FormItem className="flex gap-[1.625rem] space-y-0 max-w-[1125px] p-4">
              {mockFormPlayerProfile.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='playerProfileId'
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="basis-1/3"
                      >
                        <FormControl>
                          <Card
                            aria-disabled={form.getValues("playerProfileId").length !== 0 && (form.getValues('playerProfileId') !== item.id)}
                            className={cn("py-4 px-6 space-y-6 h-full aria-disabled:opacity-50 cursor-pointer transition ease-in-out duration-300", getRpgStyling(item.title), field.value === item.id && 'shadow-[10px_10px_10px_0_rgb(0,0,0,0.25)]' )}
                            onClick={() => {
                              return field.value === item.id ? field.onChange('') : field.onChange(item.id)
                            }}
                          >
                            <div
                              className={cn("rounded-full p-4 h-24 w-24 flex justify-center items-center", getRpgImageColor(item.title))}
                            >
                              <Image
                                src={getRpgImage(item.title)}
                                className={`${field.value === item.id && 'drop-shadow-lg'}`}
                                alt={item.title}
                              />
                            </div>
                            <div>
                              <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                              <CardDescription className="text-base leading-6 text-neutral-700 break-">{item.description}</CardDescription>
                            </div>
                          </Card>
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </FormItem>
          )}
        />

        <div className='text-center'>
          <Button
            disabled={!form.formState.isValid}
            className='h-full max-h-14 w-full max-w-[214px] text-base disabled:opacity-50 transition ease-in-out duration-300'
            variant='default'
            type='submit'
          >
            Salvar e continuar
            <Arrow />
          </Button>
        </div>
      </form>
    </Form>
  )
}