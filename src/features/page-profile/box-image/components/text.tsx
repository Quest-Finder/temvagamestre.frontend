import React, { ElementType } from 'react'

import { cn } from '@/lib/utils'

interface TextProps {
  content: React.ReactNode
  as?: ElementType
  className?: string
}
export function Text({ content, as: Component = 'p', className }: TextProps) {
  return (
    <Component
      className={cn(
        'text-2xl font-semibold leading-10 text-neutral-950 md:leading-8',
        className,
      )}
    >
      {content}
    </Component>
  )
}
