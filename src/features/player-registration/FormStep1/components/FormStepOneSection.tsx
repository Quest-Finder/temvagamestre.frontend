import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface FormStepOneRootProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode
}

export function FormStepOneRoot({ children, className }: FormStepOneRootProps) {
  return (
    <section className={cn('flex flex-col items-center', className)}>
      {children}
    </section>
  )
}
