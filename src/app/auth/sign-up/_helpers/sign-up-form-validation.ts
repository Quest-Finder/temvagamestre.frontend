import { z } from 'zod'

import texts from '../locales/pt-BR.json'

const SIGN_UP_TEXTS = texts.SignUpForm
export const MIN_PASSWORD_LENGTH = 6
/*
  (?=.*\d)    should contain at least 1 digit
  (?=.*[a-z]) should contain at least 1 lowercase letter
  (?=.*[A-Z]) should contain at least 1 uppercase letter
  (?=.*\W)    should contain at least 1 special character
  (?!.*\s)    should not contain any blank space
*/
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/

export const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: SIGN_UP_TEXTS.email.messages.required })
      .email({ message: SIGN_UP_TEXTS.email.messages.invalid }),
    password: z
      .string()
      .min(1, { message: SIGN_UP_TEXTS.password.messages.required })
      .min(MIN_PASSWORD_LENGTH, {
        message: SIGN_UP_TEXTS.password.messages.weak,
      })
      .regex(PASSWORD_REGEX, {
        message: SIGN_UP_TEXTS.password.messages.warning,
      }),
    password_confirmation: z.string(),
    consent: z.boolean(),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: SIGN_UP_TEXTS.passwordConfirmation.errors.mismatch,
    path: ['password_confirmation'],
  })
  .refine(data => data.consent === true, {
    message: SIGN_UP_TEXTS.consent.error,
    path: ['consent'],
  })

export type FormSchema = z.infer<typeof formSchema>

export const defaultValues: FormSchema = {
  email: '',
  password: '',
  password_confirmation: '',
  consent: false,
}
