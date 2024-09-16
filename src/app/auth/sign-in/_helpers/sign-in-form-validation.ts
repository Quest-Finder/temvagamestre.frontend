import { z } from 'zod'

import texts from '../locales/pt-BR.json'

const SIGN_IN_FORM_TEXTS = texts.SignInForm

export const signInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: SIGN_IN_FORM_TEXTS.email.messages.required })
    .email({ message: SIGN_IN_FORM_TEXTS.email.messages.invalid }),
  password: z
    .string()
    .min(1, { message: SIGN_IN_FORM_TEXTS.password.messages.required }),
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>

export const signInDefaultValues: SignInFormSchema = {
  email: '',
  password: '',
}
