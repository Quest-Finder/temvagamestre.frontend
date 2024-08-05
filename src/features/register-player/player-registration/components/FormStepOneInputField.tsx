import React, { ReactNode } from 'react'

import { cn } from '@/lib/utils'

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
