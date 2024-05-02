import * as z from 'zod'

export const FormGameStylesSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export type FormGameStylesType = z.infer<typeof FormGameStylesSchema>
