'use client'

import { FormTitle } from "../utils/title-form";
import { FormAditionalText } from "./components/FormAditionalText";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Arrow } from "@/components/icons/Arrow";

import { mockGameStyles } from './mock'

import { validationCheckBoxLimitation } from './helpers/validationCheckBoxLimitation'
import { cn } from "@/lib/utils";
import useSubmitGameStyles from "./hooks/useSubmitGameStyles";
import { useFormGameStyles } from "./hooks/useFormGameStyles";

export function FormGameStyles() {
  const {gameStyles, isLoading, form} = useFormGameStyles()

  return (
    <Form {...form}>
      <div>
        <FormAditionalText className="text-center">
          Olá! Para aprimorarmos sua experiência no TVM, por favor, responda algumas perguntas.
        </FormAditionalText>
        <FormTitle className="mb-0">
          Escolha o estilo de jogo que mais se alinha com seus interesses.
        </FormTitle>
      </div>
      <form onSubmit={form.handleSubmit(useSubmitGameStyles())} className="space-y-8 flex flex-col items-center">
        <FormField
          control={form.control}
          name="rpgStyles"
          render={() => (
            <FormItem>
              <FormItem className="flex flex-wrap justify-center max-w-[44.063rem] space-y-0 gap-2">
                {mockGameStyles.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="rpgStyles"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          aria-disabled={validationCheckBoxLimitation(form.getValues('rpgStyles'), item.id, 3)}
                          className="group/checkbox aria-disabled:cursor-not-allowed"
                        >
                          <FormLabel
                            className={cn("flex items-center bg-primary-50 w-fit py-3 px-4 rounded-full gap-2.5 space-y-0 group-aria-disabled/checkbox:opacity-50 group-aria-disabled/checkbox:pointer-events-none cursor-pointer border-[1px] font-medium text-sm font-mono text-primary-900", field.value?.includes(item.id) ? 'border-primary-900' : 'border-transparent')}
                          >
                            {item.name}
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
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </FormItem>
              {form.formState.errors.rpgStyles?.message &&
                <div className="w-fit mx-auto [&>ul]:mt-5">
                  <FormMessage/>
                </div>
              }
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
            Salvar e Continuar
            <Arrow />
          </Button>
        </div>
      </form>
    </Form>
  )
}