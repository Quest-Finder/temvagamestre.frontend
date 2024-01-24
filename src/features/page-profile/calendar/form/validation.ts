import { z } from 'zod'

export const schema = z.object({
  date: z.string().min(1, { message: 'A data é obrigatória.' }),
  hour: z.string().min(1, { message: 'A hora é obrigatória.' }),
})
