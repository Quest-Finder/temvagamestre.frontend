import { z } from 'zod'

export const schema = z.object({
  date: z.string().min(1, { message: 'A data é obrigatória.' }).max(255),
  hour: z.string().min(1, { message: 'A hora é obrigatória.' }).max(255),
})
