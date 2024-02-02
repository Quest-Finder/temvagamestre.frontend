import { cn } from '@/lib/utils'
import React, { ElementType } from 'react'
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
      className={cn(
        'rounded-lg border border-none bg-card text-card-foreground shadow-sm',
        className,
      )}
    >
      {children}
    </Component>
  )
}
