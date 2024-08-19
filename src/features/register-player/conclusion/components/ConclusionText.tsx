import React, { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ConclusionTextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function ConclusionText({
  children,
  className,
  ...props
}: ConclusionTextProps) {
  return (
    <p
      className={cn('max-w-[800px] text-center text-neutral-600', className)}
      {...props}
    >
      {children}
    </p>
  )
}
