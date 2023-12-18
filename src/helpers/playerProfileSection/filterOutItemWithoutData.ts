import { PlayerProfileData } from '@/helpers/playerProfileSection/interfaces'

export function filterOutItemWithoutData(list: PlayerProfileData[]) {
  const legendListWithValidItems = list.filter(item => item.value !== 0)
  return legendListWithValidItems
}
