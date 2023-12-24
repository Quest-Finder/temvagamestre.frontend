import { PlayerProfileData } from '@/features/page-profile/playerProfileSection/helpers/interfaces'

export function filterOutItemWithoutData(list: PlayerProfileData[]) {
  const legendListWithValidItems = list.filter(item => item.value !== 0)
  return legendListWithValidItems
}
