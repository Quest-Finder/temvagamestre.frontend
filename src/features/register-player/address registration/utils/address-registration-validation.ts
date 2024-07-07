import { z } from 'zod'

export const addressRegistrationValidation = z
  .object({
    state: z.string().max(2).optional(),
    city: z.string().max(255).optional(),
    liveAbroad: z.boolean().default(false),
  })
  .refine(
    data =>
      (data.liveAbroad === true && (!data.state || !data.city)) ||
      (data.liveAbroad === false && data.state && data.city),

    {
      message:
        "Se 'liveAbroad' for verdadeiro, 'state' e 'city' devem estar vazios. Se 'liveAbroad' for falso, 'state' e 'city' devem estar preenchidos.",
      path: ['liveAbroad', 'state', 'city'],
    },
  )
