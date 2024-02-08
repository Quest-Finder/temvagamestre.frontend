import { PlayerProfileData } from '@/helpers/playerProfileSection/interfaces'

export function reorderListInDescendingOrder(list: PlayerProfileData[]) {
  list.sort((a, b) => a.value - b.value)
  list.reverse()
  return list
}
