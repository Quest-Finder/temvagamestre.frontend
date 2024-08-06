import React, { ElementType } from 'react'

import { cn } from '@/lib/utils'

interface TypographyH2Pros {
  content: string
  as?: ElementType
  className?: string
}
export function Typography({
  content,
  as: Component = 'p',
  className,
}: TypographyH2Pros) {
  return (
    <Component
      className={cn(
        'text-center font-notoSans text-xl font-semibold leading-normal',
        className,
      )}
    >
      {content}
    </Component>
  )
}
