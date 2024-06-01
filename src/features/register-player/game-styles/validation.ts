import * as z from 'zod'

export const FormGameStylesSchema = z.object({
  rpgStyles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Você precisa escolher no mínimo 1 opção.",
  })
    .refine((array) => array.length <=  3, {
    message: "Escolher no máximo 3 opções"
  }),
})

export type FormGameStylesType = z.infer<typeof FormGameStylesSchema>
