import React, { ElementType } from 'react'

import { cn } from '@/lib/utils'

interface TypographyH2Pros {
  children: React.ReactNode
  as?: ElementType
  className?: string
}
export function Typography({
  children,
  as: Component = 'p',
  className,
}: TypographyH2Pros) {
  return (
    <Component
      className={cn('mb-4 w-full text-2xl text-neutral-950', className)}
    >
      {children}
    </Component>
  )
}
