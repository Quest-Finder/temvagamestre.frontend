import { z } from 'zod'

import { filterBadWords, normalizeText } from '@/helpers'

import texts from '../_locales/pt-BR.json'
import {
  INTEREST_TYPES,
  type InterestType,
  PRONOUN_TYPES,
  type PronounType,
} from '../_types'

export const USER_MAX_LENGTH = 30
export const USERNAME_MAX_LENGTH = 15

const USER_FORM_TEXTS = texts.User.UserForm

export const userFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: USER_FORM_TEXTS.name.errors.required,
    })
    .max(USER_MAX_LENGTH)
    .regex(/^[a-zA-ZÀ-ÿ\s'-]*$/, {
      message: USER_FORM_TEXTS.name.errors.specialCharsAndNumbers,
    })
    .regex(/^\S+(\s\S+)+$/, {
      message: USER_FORM_TEXTS.name.errors.fullName,
    })
    .refine(name => !filterBadWords.isProfane(normalizeText(name)), {
      message: USER_FORM_TEXTS.name.errors.badWords,
    }),
  username: z
    .string()
    .min(1, {
      message: USER_FORM_TEXTS.username.errors.required,
    })
    .max(USERNAME_MAX_LENGTH)
    .regex(/^[a-zA-Z0-9'-]*$/, {
      message: USER_FORM_TEXTS.username.errors.specialChars,
    })
    .refine(username => !filterBadWords.isProfane(normalizeText(username)), {
      message: USER_FORM_TEXTS.username.errors.badWords,
    }),
  pronoun: z
    .enum(['', ...PRONOUN_TYPES])
    .refine(data => PRONOUN_TYPES.includes(data as PronounType)),
  interest: z
    .enum(['', ...INTEREST_TYPES])
    .refine(data => INTEREST_TYPES.includes(data as InterestType)),
  dateOfBirth: z.string(),
})

export type UserFormSchema = z.infer<typeof userFormSchema>

export const userDefaultValues: UserFormSchema = {
  name: '',
  username: '',
  pronoun: '',
  interest: '',
  dateOfBirth: '',
}
