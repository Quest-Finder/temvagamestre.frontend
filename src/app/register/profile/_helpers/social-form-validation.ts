import { z } from 'zod'

import { socialMediaBaseUrls } from '@/utils'

import texts from '../_locales/pt-BR.json'

const SOCIAL_FORM_TEXTS = texts.Social.SocialForm

function validateUrl(baseUrlToCompare: string, url?: string) {
  if (url && url.length > 0) {
    return url?.startsWith(baseUrlToCompare)
  }

  return true
}

export const socialFormSchema = z
  .object({
    discord: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.discord, url), {
        message: SOCIAL_FORM_TEXTS.url.errors.invalid,
      }),
    facebook: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.facebook, url), {
        message: SOCIAL_FORM_TEXTS.url.errors.invalid,
      }),
    instagram: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.instagram, url), {
        message: SOCIAL_FORM_TEXTS.url.errors.invalid,
      }),
    tiktok: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.tiktok, url), {
        message: SOCIAL_FORM_TEXTS.url.errors.invalid,
      }),
    twitch: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.twitch, url), {
        message: SOCIAL_FORM_TEXTS.url.errors.invalid,
      }),
  })
  .refine(data => {
    const allFieldsAreEmpty = Object.values(data).every(url => url === '')
    return !allFieldsAreEmpty
  })

export type SocialFormSchema = z.infer<typeof socialFormSchema>

export const socialDefaultValues: SocialFormSchema = {
  discord: '',
  facebook: '',
  instagram: '',
  tiktok: '',
  twitch: '',
}
