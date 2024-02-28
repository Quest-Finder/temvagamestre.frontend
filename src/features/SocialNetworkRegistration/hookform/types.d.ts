import { z } from 'zod'
import { schema } from './validation'

export type Schema = z.infer<typeof schema>
export type SchemaKey = keyof Schema
