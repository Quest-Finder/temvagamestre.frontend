import { PlayerProfileDataProps } from '../helpers/interfaces'
import { getIcon } from '../helpers/getIcon'
import { LegendItem } from './LegendItem'

export function PlayerProfileGraphLegend({
  graphData,
}: PlayerProfileDataProps) {
  return (
    <ul className='flex flex-col gap-6'>
      {graphData.map(item => (
        <LegendItem
          key={item.id}
          legend={item.description}
          icon={() => getIcon(item.description)}
        />
      ))}
    </ul>
  )
}
