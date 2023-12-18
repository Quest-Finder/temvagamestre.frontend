import { PlayerProfileDataProps } from '@/helpers/playerProfileSection/interfaces'
import { getIcon } from '@/helpers/playerProfileSection/getIcon'
import { filterOutItemWithoutData } from '@/helpers/playerProfileSection/filterOutItemWithoutData'
import { reorderListInDescendingOrder } from '@/helpers/playerProfileSection/reorderListInDescendingOrder'
import { LegendItem } from './LegendItem'

export function GraphLegend({ graphData }: PlayerProfileDataProps) {
  const filteredList = reorderListInDescendingOrder(
    filterOutItemWithoutData(graphData),
  )

  return (
    <ul className='flex flex-col gap-6'>
      {filteredList.map(item => (
        <LegendItem
          key={item.id}
          legendType={item.description}
          icon={() => getIcon(item.description)}
        />
      ))}
    </ul>
  )
}
