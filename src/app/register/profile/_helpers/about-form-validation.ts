import { z } from 'zod'

import { filterBadWords, normalizeText } from '@/helpers'

import texts from '../_locales/pt-BR.json'

export const MAX_TITLE_LENGTH = 50
export const MAX_BIO_LENGTH = 500
const ABOUT_FORM_TEXTS = texts.About.AboutForm

export const aboutFormSchema = z
  .object({
    title: z
      .string()
      .max(MAX_TITLE_LENGTH)
      .optional()
      .refine(name => !filterBadWords.isProfane(normalizeText(name ?? '')), {
        message: ABOUT_FORM_TEXTS.title.errors.badWords,
      }),
    bio: z
      .string()
      .max(MAX_BIO_LENGTH)
      .optional()
      .refine(name => !filterBadWords.isProfane(normalizeText(name ?? '')), {
        message: ABOUT_FORM_TEXTS.bio.errors.badWords,
      }),
  })
  .refine(data => {
    const allFieldsAreEmpty = Object.values(data).every(url => url === '')
    return !allFieldsAreEmpty
  })

export type AboutFormSchema = z.infer<typeof aboutFormSchema>

export const aboutDefaultValues: AboutFormSchema = {
  title: '',
  bio: '',
}
