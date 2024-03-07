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
import { DateOfBirth } from './components/DateOfBirth'

const FormSchema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(3, 'Nome deve conter no minimo 3 caracteres')
    .max(30, 'Nome deve conter no máximo 30 caracteres')
    .regex(/\w+(?:\s+\w+)+/, 'Necessário preencher nome e sobrenome')
    .regex(
      /^[A-Za-z]+( [A-Za-z]+)*$/,
      'Caracteres especiais não são disponiveis',
    ),
  username: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(15, 'O username deve conter no máximo 15 caracteres')
    .regex(/^[a-zA-Z0-9'-]*$/, 'Caracteres especiais não são disponiveis'),
  pronoun: z.string(),
  dateOfBirth: z.string().min(2),
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
  useEffect(() => {
    form.setValue('dateOfBirth', date)
  }, [date, form])

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const formData = { ...data, dateOfBirth: date }
    console.log('form', formData)
  }

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate)
    console.log(selectedDate)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-[340px] space-y-5'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome*</FormLabel>
              <FormControl>
                <Input
                  placeholder='Exemplo: Pedro da Silva Sauro'
                  {...field}
                />
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
                <Input
                  placeholder='Exemplo: Pedrosauro'
                  {...field}
                />
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
                    <SelectValue
                      placeholder='Selecione uma opção'
                      defaultValue='none'
                    />
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
          render={({ field }) => (
            <FormItem>
              <DateOfBirth
                onSelectedDate={handleSelectDate}
                {...field}
              />
            </FormItem>
          )}
        />
        {/* <FormItem>
          <DateOfBirth onSelectedDate={handleSelectDate} />
        </FormItem> */}
        <Button
          variant='outline'
          type='submit'
        >
          Próximo
        </Button>
      </form>
    </Form>
  )
}
