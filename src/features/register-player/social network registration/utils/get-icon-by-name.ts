import Discord from '@/components/icons/discord'
import FacebookIcon from '@/components/icons/facebookIcon'
import { InstagramIcon } from '@/components/icons/instagram'
import ReeditIcon from '@/components/icons/reeditIcon'
import XIcon from '@/components/icons/xIcon'

type SocialMediaName =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'reddit'
  | 'discord'
export function getIconByName(socialMedia: SocialMediaName) {
  switch (socialMedia) {
    case 'facebook':
      return FacebookIcon
    case 'instagram':
      return InstagramIcon
    case 'twitter':
      return XIcon
    case 'reddit':
      return ReeditIcon
    case 'discord':
      return Discord
    default:
      return null
  }
}
