import { z } from 'zod'

export const schema = z
  .object({
    tiktok: z.string().max(255).optional(),
    instagram: z.string().max(255).optional(),
    facebook: z.string().max(255).optional(),
    reddit: z.string().max(255).optional(),
    twitter: z.string().max(255).optional(),
  })
  .refine(
    data => {
      const socialMediaValues = Object.values(data)
      const hasAtLeastOneSocialMedia = socialMediaValues.some(value => !!value)
      if (!hasAtLeastOneSocialMedia) {
        return false
      }
      return true
    },
    {
      message: 'Pelo menos uma rede social deve ser selecionada.',
    },
  )
