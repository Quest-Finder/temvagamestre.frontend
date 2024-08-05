'use client'

import Image from 'next/image'

import { Arrow } from '@/components/icons/Arrow'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { cn } from '@/lib/utils'

import * as FormText from '../FormText.json'
import useSubmitFormRegister from '../utils/submitFormRegister'
import { FormTitle } from '../utils/title-form'
import { FormAdditionalText } from './components/FormAdditionalText'
import { getRpgStyling } from './helpers/getRpgStyle'
import { useFormPlayerProfile } from './hooks/useFormPlayerProfile'
import { mockFormPlayerProfile } from './mock'

export function FormPlayerProfile() {
  const { form } = useFormPlayerProfile()

  return (
    <Form {...form}>
      <div>
        <FormAdditionalText>
          {FormText.playerProfile.additionalText}
        </FormAdditionalText>
        <FormTitle>{FormText.playerProfile.title}</FormTitle>
      </div>
      <form
        onSubmit={form.handleSubmit(useSubmitFormRegister)}
        className='flex flex-col items-center space-y-8'
      >
        <FormField
          control={form.control}
          name='playerProfileId'
          render={() => (
            <FormItem className='flex max-w-[1125px] gap-[1.625rem] space-y-0 p-4'>
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
                            className={cn(
                              'h-full cursor-pointer space-y-6 px-6 py-4 transition duration-300 ease-in-out aria-disabled:opacity-50',
                              getRpgStyling(item.title).stylingClass,
                              field.value === item.id &&
                                'shadow-[10px_10px_10px_0_rgb(0,0,0,0.25)]',
                            )}
                            onClick={() => {
                              return field.value === item.id
                                ? field.onChange('')
                                : field.onChange(item.id)
                            }}
                          >
                            <div
                              className={cn(
                                'flex h-24 w-24 items-center justify-center rounded-full p-4',
                                getRpgStyling(item.title).colorClass,
                              )}
                            >
                              <Image
                                src={getRpgStyling(item.title).image}
                                className={cn(
                                  field.value === item.id && 'drop-shadow-lg',
                                )}
                                alt={item.title}
                              />
                            </div>
                            <div>
                              <CardTitle className='mb-1 text-base'>
                                {item.title}
                              </CardTitle>
                              <CardDescription className='break- text-base leading-6 text-neutral-700'>
                                {item.description}
                              </CardDescription>
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
            className='h-full max-h-14 w-full max-w-[214px] text-base transition duration-300 ease-in-out disabled:opacity-50'
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
