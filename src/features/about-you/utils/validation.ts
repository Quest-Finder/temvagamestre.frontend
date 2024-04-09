import { z } from 'zod'

export const validateAboutYou = z.object({
  titulo: z.string().min(1).max(50).default(''),
  bio: z.string().min(1).max(500).default(''),
})
