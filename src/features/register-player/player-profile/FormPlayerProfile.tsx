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
import { useForm } from "react-hook-form"
import { FormPlayerProfileType, FormPlayerProfileSchema } from './validation'
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'

import { mockFormPlayerProfile } from './mock'

import { getRpgImage, getRpgStyling, getRpgImageColor } from './helpers/getRpgStyle'
import { FormTitle } from "./components/FormTitle"
import { FormAditionalText } from "./components/FormAditionalText"

export function FormPlayerProfile() {
  const form = useForm<FormPlayerProfileType>({
    resolver: zodResolver(FormPlayerProfileSchema),
    defaultValues: {
      playerProfileId: '',
    },
  })

  function onSubmit(data: FormPlayerProfileType) {
    console.log(data)
  }

  console.log(form.getValues('playerProfileId'))

  return (
    <Form {...form}>
      <FormAditionalText>
        Olá! Para aprimorarmos sua experiência no TVM, por favor, responda algumas perguntas.
      </FormAditionalText>
      <FormTitle>
        Escolha o perfil de jogador que mais se alinha com seus interesses.
      </FormTitle>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
        <FormField
          control={form.control}
          name='playerProfileId'
          render={() => (
            <FormItem className="flex gap-[1.625rem] space-y-0 max-w-[1125px]">
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
                            className={`${getRpgStyling(item.title)} py-4 px-6 aria-disabled:opacity-50 cursor-pointer`}
                            onClick={() => {
                              console.log(form.getValues('playerProfileId'))
                              return field.onChange(item.id)
                            }}
                          >
                            <div className={`${getRpgImageColor(item.title)} rounded-full p-4 h-24 w-24 flex justify-center items-center`}>
                              <Image
                                src={getRpgImage(item.title)}
                                alt={item.title}
                              />
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
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
            className='mt-4 h-full max-h-14 w-full max-w-[214px] text-base disabled:opacity-50'
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