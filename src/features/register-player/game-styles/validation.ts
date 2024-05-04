import * as z from 'zod'

export const FormGameStylesSchema = z.object({
  rpgStyles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  })
    .refine((array) => array.length <=  3, {
    message: "No máximo 3 opções"
  }),
})

export type FormGameStylesType = z.infer<typeof FormGameStylesSchema>
