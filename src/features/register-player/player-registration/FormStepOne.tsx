'use client'

import { Arrow } from '@/components/icons/Arrow'
import { NotValid } from '@/components/icons/NotValid'
import { Update } from '@/components/icons/Update'
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

import * as FormText from '../FormText.json'
import { FormFirstStep } from '.'
import { useFormStepOne } from './hooks/useFormStepOne'
import useSubmitStepOne from './hooks/useSubmitStepOne'

export function FormStepOne() {
  const { nameLoading, form, handleSelectDate } = useFormStepOne()

  return (
    <FormFirstStep.Root>
      <Form {...form}>
        <FormFirstStep.Title>{FormText.formStepOne.title}</FormFirstStep.Title>
        <form
          onSubmit={form.handleSubmit(useSubmitStepOne())}
          className='w-full max-w-[340px] space-y-4'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome*</FormLabel>
                <FormControl>
                  <FormFirstStep.InputField>
                    <Input
                      disabled={nameLoading}
                      isError={form.formState.errors.name}
                      className='disabled:bg-neutral-300 disabled:placeholder:text-transparent'
                      placeholder='Exemplo: Pedro da Silva Sauro'
                      {...field}
                    />
                    {form.formState.errors.name && (
                      <FormFirstStep.InputIcon icon={NotValid} />
                    )}
                    {nameLoading && (
                      <FormFirstStep.InputIcon
                        icon={Update}
                        className='motion-safe:animate-pulse'
                      />
                    )}
                  </FormFirstStep.InputField>
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
                  <FormFirstStep.InputField>
                    <Input
                      isError={form.formState.errors.username}
                      placeholder='Exemplo: Pedrosauro'
                      {...field}
                    />
                    {form.formState.errors.username && (
                      <FormFirstStep.InputIcon icon={NotValid} />
                    )}
                  </FormFirstStep.InputField>
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
                    <SelectItem value='he/his'>Ele / Dele</SelectItem>
                    <SelectItem value='she/her'>Ela / Dela</SelectItem>
                    <SelectItem value='they/theirs'>Elu / Delu</SelectItem>
                    <SelectItem value="I don't want to share any pronouns">
                      Não me sinto confortável em responder
                    </SelectItem>
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
                <FormFirstStep.DateOfBirth onSelectedDate={handleSelectDate} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='text-center'>
            <Button
              disabled={!form.formState.isValid}
              aria-disabled={form.formState.isValidating}
              className='mt-4 h-full max-h-14 w-full max-w-[214px] text-base disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:animate-pulse aria-disabled:cursor-wait'
              variant='default'
              type='submit'
            >
              Próximo
              <Arrow />
            </Button>
          </div>
        </form>
      </Form>
    </FormFirstStep.Root>
  )
}
