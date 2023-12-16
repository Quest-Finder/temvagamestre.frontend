import { ElementType } from 'react'

interface LegendItemProps {
  legendType: string
  icon: ElementType
}

export function LegendItem({ legendType, icon: Icon }: LegendItemProps) {
  return (
    <li className='flex items-center gap-3 text-xs'>
      <Icon />
      <p>{legendType}</p>
    </li>
  )
}
