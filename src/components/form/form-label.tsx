import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

import { Label } from '../ui/label'
import { useFormField } from './use-form-field'

const formLabelVariants = cva('', {
  variants: {
    type: {
      default: '',
      checkbox: 'text-sm font-normal',
    },
  },
  defaultVariants: { type: 'default' },
})

interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof formLabelVariants> {}

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ type, className, ...props }, ref) => {
  const { formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(formLabelVariants({ type, className }))}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'
