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

import { filter } from './helper/badWordsFilter'

import { DateOfBirth } from './components/DateOfBirth'

import { Arrow } from './icons/Arrow'
import { NotValid } from './icons/NotValid'

const FormSchema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(3, 'Nome deve conter no minimo 3 caracteres')
    .max(30, 'Nome deve conter no máximo 30 caracteres')
    .regex(
      /^[A-Za-z]+( [A-Za-z]+)*$/,
      'Caracteres especiais e numeros não são disponiveis',
    )
    .regex(/\w+(?:\s+\w+)+/, 'Necessário preencher nome e sobrenome'),
  username: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(15, 'O username deve conter no máximo 15 caracteres')
    .regex(/^[a-zA-Z0-9'-]*$/, 'Caracteres especiais não são disponiveis')
    .refine(username => !filter.isProfane(username), {
      message: 'Palavras de baixo calão não são permitidas',
    }),
  pronoun: z.string(),
  dateOfBirth: z.string().min(10, 'Campo obrigatório'),
})

export function FormSetpOne() {
  const [date, setDate] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      name: '',
      username: '',
      pronoun: '',
      dateOfBirth: '',
    },
    resolver: zodResolver(FormSchema),
  })

  // async function getUserName() {
  //   const response = await fetch(
  //     'https://tem-vaga-mestre-api-nnf7bytugq-uc.a.run.app/user',
  //   )

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data')
  //   }

  //   return response.json()
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const { firstName, lastName } = await getUserName()
  //     form.setValue('name', firstName.concat(' ', lastName))
  //   }
  //   fetchData()
  // })

  useEffect(() => {
    form.setValue('dateOfBirth', date)
    if (date.length === 10) {
      form.trigger('dateOfBirth')
    }
  }, [date, form])

  // console.log(form.getValues('dateOfBirth'))

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    // const dataToBackEnd = {
    //   ...data,
    //   firstName: data.name.substring(0, data.name.indexOf(' ')),
    //   lastName: data.name.substring(data.name.indexOf(' ') + 1),
    // }
    // console.log('form', dataToBackEnd)
  }

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
  }
  return (
    <section className='flex flex-col items-center'>
      <h1 className='mb-4 text-[32px] text-neutral-950'>
        Deixe-nos sabes mais sobre você
      </h1>
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
                  <div className='relative'>
                    <Input
                      className={`${
                        form.formState.errors.name
                          ? 'border-red-500 bg-red-100 text-red-500'
                          : ''
                      }`}
                      placeholder='Exemplo: Pedro da Silva Sauro'
                      {...field}
                    />
                    <NotValid
                      className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                        form.formState.errors.name ? '' : 'hidden'
                      }`}
                    />
                  </div>
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
                  <div className='relative'>
                    <Input
                      className={`${
                        form.formState.errors.username
                          ? 'border-red-500 bg-red-100 text-red-500'
                          : ''
                      }`}
                      placeholder='Exemplo: Pedrosauro'
                      {...field}
                    />
                    <NotValid
                      className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                        form.formState.errors.name ? '' : 'hidden'
                      }`}
                    />
                  </div>
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
                  // defaultValue={field.value}
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
                <DateOfBirth onSelectedDate={handleSelectDate} />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormItem>
            <DateOfBirth onSelectedDate={handleSelectDate} />
            <FormMessage />
          </FormItem> */}
          <div className='text-center'>
            <Button
              className='h-full max-h-14 w-full max-w-[214px] text-base'
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
