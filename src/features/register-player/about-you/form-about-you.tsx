'use client'

import { FormProvider } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RegisterRoutes } from '@/services/routers'

import FormText from '../FormText.json'
import { getError } from '../utils/getError'
import { FormTitle } from '../utils/title-form'
import useHookFormAboutYou from './hooks/useHookFormAboutYou'
import useSubmitFormAboutYouRegistration from './service/useSubmitFormAboutYou'

export default function FormAboutYou() {
  const form = useHookFormAboutYou()
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            useSubmitFormAboutYouRegistration(form, RegisterRoutes.Adress),
          )}
          className='flex flex-col items-center justify-center gap-4'
        >
          <FormTitle>{FormText.aboutYou.title}</FormTitle>

          <div className='grid w-full max-w-[21.25rem] gap-4'>
            <FormField
              control={form.control}
              name='titulo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl font-normal leading-4'>
                    Título
                  </FormLabel>
                  <FormControl>
                    <Input
                      variant={form.formState.errors.titulo && 'error'}
                      placeholder='Exemplo: Jogador combeiro safado'
                      maxLength={50}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bio'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl font-normal leading-4'>
                    Bio
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      maxLength={500}
                      placeholder='Explorador das terras mágicas de Aldoria, mestre em interpretar personagens épicos e mergulhar em histórias de fantasia medieval. Pronto para embarcar em jornadas de roleplay intensas no mundo dos RPGs de mesa.'
                      className={`invisible-scrollbar h-[7.25rem] resize-none px-4 py-2 text-sm leading-5 shadow-xl focus-visible:ring-transparent ${getError(
                        form.formState.errors.titulo,
                      )}`}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='animate-wiggle mt-10 flex flex-col-reverse items-center gap-10 sm:flex-row'>
            <p className='text-center text-sm font-normal leading-5 text-neutral-500'>
              Não responder nesse momento
            </p>
            <Button
              type='submit'
              className='animate-wiggle min-h-[3.5rem] min-w-[12.1875rem] max-w-[13.375rem] px-8 py-4'
            >
              Salvar e Continuar
              {/* <ArrowLeft /> */}
            </Button>
          </div>
        </form>
      </Form>
    </FormProvider>
  )
}
