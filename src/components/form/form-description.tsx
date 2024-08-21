import React from 'react'

import { cn } from '@/lib/utils'

import { useFormField } from './use-form-field'

interface FormDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ as: Component = 'p', className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <Component
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-foreground-soft', className)}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'
