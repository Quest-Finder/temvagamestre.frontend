import { cn } from '@/lib/utils'
import React, { ElementType } from 'react'

interface TextProps {
  content: React.ReactNode
  as?: ElementType
  className?: string
}
export function Text({ content, as: Component = 'p', className }: TextProps) {
  return (
    <Component
      className={cn(
        'color-neutral-950 pl-2 text-lg font-semibold leading-7',
        className,
      )}
    >
      {content}
    </Component>
  )
}
