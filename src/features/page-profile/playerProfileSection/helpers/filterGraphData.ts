import { PlayerProfileData } from '@/features/page-profile/playerProfileSection/helpers/interfaces'

function filterOutItemWithNoValue(list: PlayerProfileData[]) {
  const legendListWithValidItems = list.filter(item => item.value !== 0)
  return legendListWithValidItems
}

function reorderListInDescendingOrder(list: PlayerProfileData[]) {
  list.sort((a, b) => a.value - b.value)
  list.reverse()
  return list
}

export function filteredGraphData(data: PlayerProfileData[]) {
  const filteredData = filterOutItemWithNoValue(
    reorderListInDescendingOrder(data),
  )
  return filteredData
}
