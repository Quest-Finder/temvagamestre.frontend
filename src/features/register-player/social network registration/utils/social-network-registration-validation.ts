import { z } from 'zod'

const socialNetworkValidation = z.object({
  facebook: z.object({
    socialMediaId: z.string().max(255).optional(),
    userLink: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  instagram: z.object({
    socialMediaId: z.string().max(255).optional(),
    userLink: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  reddit: z.object({
    socialMediaId: z.string().max(255).optional(),
    userLink: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  x: z.object({
    socialMediaId: z.string().max(255).optional(),
    userLink: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
  discord: z.object({
    socialMediaId: z.string().max(255).optional(),
    userLink: z.string().max(255).optional(),
    visible: z.boolean().optional(),
  }),
})

export { socialNetworkValidation }
