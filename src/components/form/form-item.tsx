import React from 'react'

import { cn } from '@/lib/utils'

import { FormItemContext } from './form-context'

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId()
    const currentId = React.useMemo(() => ({ id }), [id])

    return (
      <FormItemContext.Provider value={currentId}>
        <div
          ref={ref}
          className={cn('flex w-full flex-col gap-1.5', className)}
          {...props}
        />
      </FormItemContext.Provider>
    )
  },
)
FormItem.displayName = 'FormItem'
