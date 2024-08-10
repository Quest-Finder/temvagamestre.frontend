import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva('w-full rounded-lg border border-border p-4', {
  variants: {
    variant: {
      default: 'bg-foreground-support/5 text-foreground',
      info: 'border-info bg-info-soft/20 text-info dark:text-info-hard',
      warning: 'border-warning bg-warning-soft/20 text-warning-hard',
      error: 'border-error bg-error-soft/20 text-error dark:text-error-hard',
      success:
        'border-success bg-success-soft/20 text-success dark:text-success-hard',
    },
  },
  defaultVariants: {
    variant: 'error',
  },
})

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role='alert'
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
AlertRoot.displayName = 'Alert'

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-semibold leading-tight', className)}
      {...props}
    >
      {children}
    </h5>
  ),
)
AlertTitle.displayName = 'AlertTitle'

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export const Alert = {
  Root: AlertRoot,
  Title: AlertTitle,
  Description: AlertDescription,
}

/* USAGE

  <Alert.Root>
    <Alert.Title/>
    <Alert.Description/>
  </Alert.Root>

*/
