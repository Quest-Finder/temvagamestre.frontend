// TODO: implement <input-new.tsx> in this component

import * as React from 'react'
import { FieldError } from 'react-hook-form'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean | FieldError
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isError = false, ...props }, ref) => {
    const baseClasses =
      'flex h-10 w-full bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400'
    const borderClasses =
      'rounded-md border border-slate-200 dark:border-slate-800'
    const focusClasses =
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-300'
    const fileClasses =
      'file:border-0 file:bg-transparent file:text-sm file:font-medium'
    const errorClasses =
      'border-red-700 bg-red-100 text-red-700 placeholder:text-red-700'

    return (
      <input
        type={type}
        className={cn(
          baseClasses,
          borderClasses,
          focusClasses,
          fileClasses,
          isError && errorClasses,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
