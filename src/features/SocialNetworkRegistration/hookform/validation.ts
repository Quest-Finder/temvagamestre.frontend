// import { z } from 'zod'

// export const schema = z
//   .object({
//     tiktok: z.string().max(255).optional(),
//     instagram: z.string().max(255).optional(),
//     facebook: z.string().max(255).optional(),
//     reddit: z.string().max(255).optional(),
//     twitter: z.string().max(255).optional(),
//   })

import { z } from 'zod'

export const schema = z.object({
  tiktok: z
    .object({
      username: z.string().max(255),
      visible: z.boolean().optional(),
    })
    .optional(),
  instagram: z
    .object({
      username: z.string().max(255),
      visible: z.boolean().optional(),
    })
    .optional(),
  facebook: z
    .object({
      username: z.string().max(255),
      visible: z.boolean().optional(),
    })
    .optional(),
  reddit: z
    .object({
      username: z.string().max(255),
      visible: z.boolean().optional(),
    })
    .optional(),
  twitter: z
    .object({
      username: z.string().max(255),
      visible: z.boolean().optional(),
    })
    .optional(),
})
