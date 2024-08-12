import { ElementType } from 'react'

import AngryBearIcon from '@/features/page-profile/playerProfileSection/Icons/AngryBearIcon'
import SkullIcon from '@/features/page-profile/playerProfileSection/Icons/SkullIcon'
import UnionIcon from '@/features/page-profile/playerProfileSection/Icons/UnionIcon'

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
