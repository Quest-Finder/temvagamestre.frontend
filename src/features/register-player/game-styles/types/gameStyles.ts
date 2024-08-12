import { z } from 'zod'

import { FormGameStylesSchema } from '../validation'

export interface GameStyle {
  id: string
  name: string
}

export type FormGameStylesType = z.infer<typeof FormGameStylesSchema>
