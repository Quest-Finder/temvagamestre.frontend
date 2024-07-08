import Discord from '@/components/icons/discord'
import FacebookIcon from '@/components/icons/facebookIcon'
import { InstagramIcon } from '@/components/icons/instagram'
import ReeditIcon from '@/components/icons/reeditIcon'
import XIcon from '@/components/icons/xIcon'

export function getIconByName(socialMedia: string) {
  switch (socialMedia) {
    case 'facebook':
      return FacebookIcon
    case 'instagram':
      return InstagramIcon
    case 'x':
      return XIcon
    case 'reddit':
      return ReeditIcon
    case 'discord':
      return Discord
    default:
      return null
  }
}
