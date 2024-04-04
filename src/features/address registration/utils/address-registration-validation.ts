import { z } from 'zod'

export const addressRegistrationValidation = z.object({
    state: z.string().max(2).optional(),
    city: z.string().max(255).optional(),
    liveInBrazil: z.boolean().optional(),
})