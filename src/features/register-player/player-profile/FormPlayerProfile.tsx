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
// import Image from 'next/image'

import { mockFormPlayerProfile } from './mock'

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name='playerProfileId'
          render={() => (
            <FormItem>
              {mockFormPlayerProfile.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='playerProfileId'
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex"
                      >
                        <FormControl>
                          <Card
                            onClick={(selected) => {
                              return selected ? field.onChange(item.id) : field.onChange(field.value === '')
                            }}
                          >
                            <div>
                              
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
            Próximo
            <Arrow />
          </Button>
        </div>
      </form>
    </Form>
  )
}