import React from 'react'

import { cn } from '@/lib/utils'

interface FormWrapperProps extends React.HTMLAttributes<HTMLFormElement> {}

export const FormWrapper = React.forwardRef<HTMLFormElement, FormWrapperProps>(
  ({ className, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn('flex w-full flex-col gap-4', className)}
        {...props}
      />
    )
  },
)
FormWrapper.displayName = 'FormWrapper'
