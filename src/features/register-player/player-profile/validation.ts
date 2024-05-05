import { z } from "zod"

export const FormPlayerProfileSchema = z.object({
  playerProfileId: z.string()
})

export type FormPlayerProfileType = z.infer<typeof FormPlayerProfileSchema>