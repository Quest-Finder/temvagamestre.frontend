import SkullIcon from '@/components/PlayerProfileSection/Icons/SkullIcon'
import UnionIcon from '@/components/PlayerProfileSection/Icons/UnionIcon'
import AngryBearIcon from '@/components/PlayerProfileSection/Icons/AngryBearIcon'
import { ElementType } from 'react'

// export function getIcon(description: string) {
//   if (description === 'Matar, Pilhar e Destruir') {
//     return <SkullIcon />
//   }
//   if (description === 'Interpretação') {
//     return <UnionIcon />
//   }
//   if (description === 'Dungeon') {
//     return <AngryBearIcon />
//   }
// }
interface IconMap {
  [key: string]: ElementType
}

const iconMap: IconMap = {
  'Matar, Pilhar e Destruir': SkullIcon,
  Interpretação: UnionIcon,
  Dungeon: AngryBearIcon,
}

export function getIcon(description: string) {
  const IconComponent = iconMap[description]
  return IconComponent ? <IconComponent /> : null
}
