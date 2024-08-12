import { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface FormStepOneRootProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode
}

export function FormStepOneRoot({ children, className }: FormStepOneRootProps) {
  return (
    <section className={cn('mx-3 flex flex-col items-center', className)}>
      {children}
    </section>
  )
}
