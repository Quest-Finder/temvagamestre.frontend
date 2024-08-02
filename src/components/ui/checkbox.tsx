'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => {
  const baseClasses =
    'peer h-4 w-4 shrink-0 ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-slate-950'
  const borderClasses =
    'rounded-sm border border-slate-900 dark:border-slate-50'
  const focusClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-300'
  const stateClasses =
    'data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50  dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900'

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        baseClasses,
        borderClasses,
        focusClasses,
        stateClasses,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className='h-3 w-3' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
