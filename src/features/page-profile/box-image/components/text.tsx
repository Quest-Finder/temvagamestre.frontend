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
        'color-[#292929] pl-2 text-2xl font-semibold leading-7',
        className,
      )}
    >
      {content}
    </Component>
  )
}
