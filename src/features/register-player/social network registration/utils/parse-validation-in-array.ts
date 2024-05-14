import { socialNetworkValidation } from './social-network-registration-validation'

export type keysFieldValues =
  | 'facebook'
  | 'instagram'
  | 'reddit'
  | 'twitter'
  | 'discord'

type SocialValidation = {
  name: keysFieldValues
}

export function parseSocialValidationInArray(): SocialValidation[] {
  return Object.entries(socialNetworkValidation.shape).map(([name]) => ({
    name: name as keysFieldValues,
  }))
}
