import React from 'react'

import { cn } from '@/lib/utils'

import { useFormField } from './use-form-field'

interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-foreground-soft', className)}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'
