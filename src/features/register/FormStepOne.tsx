'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useEffect, useState } from 'react'

import { useUser } from '@clerk/nextjs'

import { DateOfBirth } from './components/DateOfBirth'

import { Arrow } from './icons/Arrow'
import { NotValid } from './icons/NotValid'

import { FormStepOneSchema } from './validation'
import { FormTitle } from './components/FormTitle'
import { FormInputField } from './components/FormInputField'
import { Update } from './icons/Update'
import { InputIcon } from './components/InputIcon'

export function FormSetpOne() {
  const [date, setDate] = useState('')
  const { user, isLoaded } = useUser()

  const form = useForm<z.infer<typeof FormStepOneSchema>>({
    defaultValues: {
      name: '',
      username: '',
      pronoun: '',
      dateOfBirth: '',
    },
    resolver: zodResolver(FormStepOneSchema),
  })

  useEffect(() => {
    if (user?.fullName) {
      form.setValue('name', user?.fullName)
    }
  }, [user, form])

  useEffect(() => {
    form.setValue('dateOfBirth', date)
    if (date.length === 10) {
      form.trigger('dateOfBirth')
    }
  }, [date, form])

  const onSubmit = (data: z.infer<typeof FormStepOneSchema>) => {
    // send pronoum = 'Prefiro nao responder'value se estiver vazio (usuario nao preencheu / opcional)
    console.log(data)
  }

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
  }

  return (
    <section className='flex flex-col items-center'>
      <FormTitle>Deixe-nos sabes mais sobre você</FormTitle>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full max-w-[340px] space-y-5'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome*</FormLabel>
                <FormControl>
                  <FormInputField>
                    <Input
                      disabled={!isLoaded}
                      isError={form.formState.errors.name}
                      className='disabled:bg-neutral-300 disabled:placeholder:text-transparent'
                      placeholder='Exemplo: Pedro da Silva Sauro'
                      {...field}
                    />
                    {form.formState.errors.name && (
                      <InputIcon icon={NotValid} />
                    )}
                    {!isLoaded && (
                      <InputIcon
                        icon={Update}
                        className='motion-safe:animate-pulse'
                      />
                    )}
                  </FormInputField>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username*</FormLabel>
                <FormControl>
                  <FormInputField>
                    <Input
                      isError={form.formState.errors.username}
                      placeholder='Exemplo: Pedrosauro'
                      {...field}
                    />
                    {form.formState.errors.username && (
                      <InputIcon icon={NotValid} />
                    )}
                  </FormInputField>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pronoun'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pronome</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecione uma opção' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='ele/dele'>Ele / Dele</SelectItem>
                    <SelectItem value='ela/dela'>Ela / Dela</SelectItem>
                    <SelectItem value='elu/delu'>Elu / Delu</SelectItem>
                    <SelectItem value='none'>Prefiro não responder</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dateOfBirth'
            render={() => (
              <FormItem>
                <FormLabel>Data de nascimento*</FormLabel>
                <DateOfBirth onSelectedDate={handleSelectDate} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='text-center'>
            <Button
              disabled={!form.formState.isValid}
              className='h-full max-h-14 w-full max-w-[214px] text-base disabled:opacity-50'
              variant='default'
              type='submit'
            >
              Próximo
              <Arrow />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
