import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronRight } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

import { useFormField } from './use-form-field'

const formMessageVariants = cva('flex items-center gap-1', {
  variants: {
    variant: {
      info: 'text-info dark:text-info-hard',
      warning: 'text-warning dark:text-warning-hard',
      error: 'text-error dark:text-error-hard',
      success: 'text-success dark:text-success-hard',
    },
  },
  defaultVariants: { variant: 'error' },
})

interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof formMessageVariants> {}

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  FormMessageProps
>(({ variant, className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <div className={cn(formMessageVariants({ variant }))}>
      <ChevronRight className='size-4' />
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-sm', className)}
        {...props}
      >
        {body}
      </p>
    </div>
  )
})
FormMessage.displayName = 'FormMessage'
