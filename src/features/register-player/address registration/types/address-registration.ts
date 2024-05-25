import { z } from 'zod'
import { addressRegistrationValidation } from '../utils/address-registration-validation'

export type addressRegistrationValidationT = z.infer<
  typeof addressRegistrationValidation
>
