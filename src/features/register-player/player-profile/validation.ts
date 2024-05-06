import { z } from "zod"

export const FormPlayerProfileSchema = z.object({
  playerProfileId: z.string()
    .min(1, { message: 'Necessário escolher pelo menos uma opção' })
})

export type FormPlayerProfileType = z.infer<typeof FormPlayerProfileSchema>