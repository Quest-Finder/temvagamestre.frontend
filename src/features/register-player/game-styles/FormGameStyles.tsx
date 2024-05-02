'use client'

import { FormTitle } from "../utils/title-form";
import { FormAditionalText } from "./components/FormAditionalText";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormGameStylesType, FormGameStylesSchema } from './validation'
import { Arrow } from "@/components/icons/Arrow";

import { mockGameStyles } from './mock'

export function FormGameStyles() {
  const form = useForm<FormGameStylesType>({
    resolver: zodResolver(FormGameStylesSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  })

  function onSubmit(data: FormGameStylesType) {
    console.log(data)
  }


  return (
    <>
      <FormAditionalText className="text-center">
        Olá! Para aprimorarmos sua experiência no TVM, por favor, responda algumas perguntas.
      </FormAditionalText>
      <FormTitle>
        Escolha o estilo de jogo que mais se alinha com seus interesses.
      </FormTitle>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="flex flex-wrap justify-center max-w-[705px] space-y-0 gap-2">
              {mockGameStyles.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex items-center bg-primary-50 w-fit py-3 px-4 rounded-full gap-2.5 space-y-0"
                      >
                        <FormLabel className="font-medium text-sm font-mono text-primary-900">
                          {item.name}
                        </FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            className="border-primary-900 data-[state=checked]:bg-primary-900 data-[state=checked]:rounded-full"
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              ))}
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
            Salvar e Continuar
            <Arrow />
          </Button>
        </div>
      </form>
    </Form>
    </>
  )
}