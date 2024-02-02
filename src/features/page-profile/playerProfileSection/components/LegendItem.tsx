import React from 'react'
import { ElementType } from 'react'

interface LegendItemProps {
  legend: string
  icon: ElementType
}

export function LegendItem({ legend, icon: Icon }: LegendItemProps) {
  return (
    <li className='flex items-center gap-3 text-xs'>
      <Icon />
      <p className='text-neutral-800'>{legend}</p>
    </li>
  )
}
