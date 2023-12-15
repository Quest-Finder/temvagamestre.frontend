import { Skull } from './Icons/Skull'
import { Union } from './Icons/Union'
import AngryBear from './Icons/AngryBear'

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
    return <Skull />
  }
  if (description === 'Interpretação') {
    return <Union />
  }
  if (description === 'Dungeon') {
    return <AngryBear />
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
