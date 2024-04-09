import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface FormInputFieldProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function FormInputField({
  children,
  className,
  ...props
}: FormInputFieldProps) {
  return (
    <div
      className={cn('relative', className)}
      {...props}
    >
      {children}
    </div>
  )
}
