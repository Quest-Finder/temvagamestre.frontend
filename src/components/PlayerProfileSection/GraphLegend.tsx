import SkullIcon from './Icons/SkullIcon'
import UnionIcon from './Icons/UnionIcon'
import AngryBearIcon from './Icons/AngryBearIcon'

export interface GraphLegendItem {
  description: string
  value: number
  id: number
}

export interface GraphLegendProps {
  legendList: GraphLegendItem[]
}

function getIcon(description: string): React.ReactNode {
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

export function GraphLegend({ legendList }: GraphLegendProps) {
  return (
    <div className='flex flex-col gap-6'>
      {legendList.map(item => (
        <div
          key={item.id}
          className='flex items-center gap-3 text-xs'
        >
          {getIcon(item.description)}
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
