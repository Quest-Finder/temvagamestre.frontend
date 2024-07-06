'use client'

import { Arrow } from '@/components/icons/Arrow'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { FormPlayerProfileSchema, FormPlayerProfileType } from './validation'

import { mockFormPlayerProfile } from './mock'

import { FormAditionalText } from './components/FormAditionalText'
import { FormTitle } from './components/FormTitle'
import {
  getRpgImage,
  getRpgImageColor,
  getRpgStyling,
} from './helpers/getRpgStyle'

export function FormPlayerProfile() {
  const form = useForm<FormPlayerProfileType>({
    resolver: zodResolver(FormPlayerProfileSchema),
    defaultValues: {
      playerProfileId: '',
    },
  })

  function onSubmit() {}

  return (
    <Form {...form}>
      <FormAditionalText>
        Olá! Para aprimorarmos sua experiência no TVM, por favor, responda
        algumas perguntas.
      </FormAditionalText>
      <FormTitle>
        Escolha o perfil de jogador que mais se alinha com seus interesses.
      </FormTitle>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col items-center space-y-8'
      >
        <FormField
          control={form.control}
          name='playerProfileId'
          render={() => (
            <FormItem className='flex max-w-[1125px] gap-[1.625rem] space-y-0'>
              {mockFormPlayerProfile.map(item => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='playerProfileId'
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className='basis-1/3'
                      >
                        <FormControl>
                          <Card
                            aria-disabled={
                              form.getValues('playerProfileId').length !== 0 &&
                              form.getValues('playerProfileId') !== item.id
                            }
                            className={`${getRpgStyling(
                              item.title,
                            )} cursor-pointer px-6 py-4 aria-disabled:opacity-50`}
                            onClick={() => {
                              return field.onChange(item.id)
                            }}
                          >
                            <div
                              className={`${getRpgImageColor(
                                item.title,
                              )} flex h-24 w-24 items-center justify-center rounded-full p-4`}
                            >
                              <Image
                                src={getRpgImage(item.title)}
                                alt={item.title}
                              />
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>
                              {item.description}
                            </CardDescription>
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
