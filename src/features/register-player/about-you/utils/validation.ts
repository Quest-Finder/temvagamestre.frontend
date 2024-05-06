import { z } from 'zod'

export const validateAboutYou = z.object({
  titulo: z.string().max(500).default(''),
  bio: z.string().max(500).default(''),
})
