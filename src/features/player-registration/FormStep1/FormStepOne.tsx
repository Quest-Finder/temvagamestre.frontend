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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Arrow } from '@/components/icons/Arrow'
import { NotValid } from '@/components/icons/NotValid'
import { Update } from '@/components/icons/Update'

import { FormStepOne } from '.'
import { useFormStepOne } from './hooks/useFormStepOne'

export function FormSetpOne() {
  const { nameLoading, onSubmit, handleSelectDate, form } = useFormStepOne()

  return (
    <FormStepOne.Root>
      <Form {...form}>
        <FormStepOne.Title>Deixe-nos sabes mais sobre você</FormStepOne.Title>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full max-w-[340px] space-y-4'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome*</FormLabel>
                <FormControl>
                  <FormStepOne.InputField>
                    <Input
                      disabled={nameLoading}
                      isError={form.formState.errors.name}
                      className='disabled:bg-neutral-300 disabled:placeholder:text-transparent'
                      placeholder='Exemplo: Pedro da Silva Sauro'
                      {...field}
                    />
                    {form.formState.errors.name && (
                      <FormStepOne.InputIcon icon={NotValid} />
                    )}
                    {nameLoading && (
                      <FormStepOne.InputIcon
                        icon={Update}
                        className='motion-safe:animate-pulse'
                      />
                    )}
                  </FormStepOne.InputField>
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
                  <FormStepOne.InputField>
                    <Input
                      isError={form.formState.errors.username}
                      placeholder='Exemplo: Pedrosauro'
                      {...field}
                    />
                    {form.formState.errors.username && (
                      <FormStepOne.InputIcon icon={NotValid} />
                    )}
                  </FormStepOne.InputField>
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
                <FormStepOne.DateOfBirth onSelectedDate={handleSelectDate} />
                <FormMessage />
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
              Próximo
              <Arrow />
            </Button>
          </div>
        </form>
      </Form>
    </FormStepOne.Root>
  )
}
