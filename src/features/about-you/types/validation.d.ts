import { z } from 'zod'
import { validateAboutYou } from '../utils/validation'

export type TValidation = z.infer<typeof validateAboutYou>
