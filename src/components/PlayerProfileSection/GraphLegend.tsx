import SkullIcon from './Icons/SkullIcon'
import UnionIcon from './Icons/UnionIcon'
import AngryBearIcon from './Icons/AngryBearIcon'
import { LegendItem } from './LegendItem'

export interface GraphLegendItem {
  description: string
  value: number
  id: number
}

export interface GraphLegendProps {
  legendList: GraphLegendItem[]
}

function getIcon(description: string) {
  if (description === 'Matar, Pilhar e Destruir') {
    return <SkullIcon />
  }
  if (description === 'Interpretação') {
    return <UnionIcon />
  }
  if (description === 'Dungeon') {
    return <AngryBearIcon />
  }
}

function filterOutItemWithoutData(list: GraphLegendItem[]) {
  const legendListWithValidItems = list.filter(item => item.value !== 0)
  return legendListWithValidItems
}

function reorderListInDescendingOrder(list: GraphLegendItem[]) {
  list.sort((a, b) => a.value - b.value)
  list.reverse()
  return list
}

export function GraphLegend({ legendList }: GraphLegendProps) {
  const filteredList = reorderListInDescendingOrder(
    filterOutItemWithoutData(legendList),
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
