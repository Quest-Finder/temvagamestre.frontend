import { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ConclusionRootProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode
}

export function ConclusionRoot({
  children,
  className,
  ...props
}: ConclusionRootProps) {
  return (
    <section
      className={cn('flex flex-col items-center space-y-8', className)}
      {...props}
    >
      {children}
    </section>
  )
}
