import { PlayerProfileDataProps } from '@/helpers/playerProfileSection/interfaces'
import { getIcon } from '@/helpers/playerProfileSection/getIcon'
import { LegendItem } from './LegendItem'

export function GraphLegend({ graphData }: PlayerProfileDataProps) {
  return (
    <ul className='flex flex-col gap-6'>
      {graphData.map(item => (
        <LegendItem
          key={item.id}
          legendType={item.description}
          icon={() => getIcon(item.description)}
        />
      ))}
    </ul>
  )
}
