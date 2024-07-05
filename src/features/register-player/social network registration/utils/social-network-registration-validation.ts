import { z } from 'zod'

const socialNetworkValidation = z.object({
  facebook: z.object({
    username: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  instagram: z.object({
    username: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  reddit: z.object({
    username: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  twitter: z.object({
    username: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  discord: z.object({
    username: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
})

export { socialNetworkValidation }
