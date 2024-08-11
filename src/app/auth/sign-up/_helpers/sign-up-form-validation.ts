import { z } from 'zod'

import texts from '../locales/pt-BR.json'

const t = texts.SignUpForm
export const MIN_PASSWORD_LENGTH = 6
const PASSWORD_REGEX = /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/

export const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: t.email.messages.required })
      .email({ message: t.email.messages.invalid }),
    password: z
      .string()
      .min(1, { message: t.password.messages.required })
      .min(MIN_PASSWORD_LENGTH, { message: t.password.messages.weak })
      .regex(PASSWORD_REGEX, { message: t.password.messages.warning }),
    password_confirmation: z.string(),
    consent: z.boolean(),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: t.passwordConfirmation.errors.mismatch,
    path: ['password_confirmation'],
  })
  .refine(data => data.consent === true, {
    message: t.consent.error,
    path: ['consent'],
  })

export type FormSchema = z.infer<typeof formSchema>

export const defaultValues: FormSchema = {
  email: '',
  password: '',
  password_confirmation: '',
  consent: false,
}
