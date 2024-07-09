'use client'

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
import { FormProvider } from 'react-hook-form'
import ButtonNextPage from '../utils/button-next-page'
import { getError } from '../utils/getError'
import { FormTitle } from '../utils/title-form'
import useHookFormAboutYou from './hooks/useHookFormAboutYou'
import useSubmitFormAboutYouRegistration from './service/useSubmitFormAboutYou'
import * as FormText from '../FormText.json'

export default function FormAboutYou() {
  const { form, onSubmit } = useHookFormAboutYou()
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col items-center justify-center gap-4'
        >
          <FormTitle>{FormText.aboutYou.title}</FormTitle>

          <div className='grid w-full max-w-[21.25rem] gap-4'>
            <FormField
              control={form.control}
              name='titulo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-notoSans text-sm font-normal leading-5 text-[#000000]'>
                    Título
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`min-h-[40px] w-full max-w-[340px] rounded-md border border-[#BDBDBD] bg-[#FFFFFF] px-4 py-2 placeholder:font-notoSans placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#D4D4D4] ${getError(
                        form.formState.errors.titulo,
                      )}`}
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
                  <FormLabel className='font-notoSans text-sm font-normal leading-5 text-[#000000]'>
                    Bio
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      maxLength={500}
                      placeholder='Explorador das terras mágicas de Aldoria, mestre em interpretar personagens épicos e mergulhar em histórias de fantasia medieval. Pronto para embarcar em jornadas de roleplay intensas no mundo dos RPGs de mesa.'
                      className={` placeholder: font-feature-settings min-h-[190px] w-full max-w-[340px]  resize-none p-4 leading-5 placeholder:font-raleway placeholder:text-sm placeholder:text-[#525252] ${getError(
                        form.formState.errors.titulo,
                      )}`}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='animate-wiggle mt-10 flex flex-col-reverse items-center gap-10  sm:flex-row'>
            <ButtonNextPage path={RegisterRoutes.Adress} />
            <Button
              type='submit'
              className='animate-wiggle min-h-[3.5rem] min-w-[12.1875rem] max-w-[13.375rem] px-8 py-4'
              disabled={!form.formState.isValid}
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
