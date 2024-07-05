import { z } from 'zod'

export const addressRegistrationValidation = z
  .object({
    state: z.string().max(2).optional(),
    city: z.string().max(255).optional(),
    liveInBrazil: z.boolean().default(false),
  })
  .refine(
    data =>
      (data.liveInBrazil === true && (!data.state || !data.city)) ||
      (data.liveInBrazil === false && data.state && data.city),

    {
      message:
        "Se 'liveInBrazil' for verdadeiro, 'state' e 'city' devem estar vazios. Se 'liveInBrazil' for falso, 'state' e 'city' devem estar preenchidos.",
      path: ['liveInBrazil', 'state', 'city'],
    },
  )
