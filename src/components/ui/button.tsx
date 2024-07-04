import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 leading-5',
  {
    variants: {
      variant: {
        default:
          'bg-primary-900  hover:bg-primary-900/95 text-neutral-50 font-mono text-sm gap-2',
        secondary:
          'bg-primary-300  hover:bg-primary-300/95 text-neutral-900 text-base gap-2 font-notoSans',
        third:
          'bg-primary-100  hover:bg-primary-100/95 text-primary-950 text-base gap-2 font-mono',
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        ghost:
          'font-mono min-h-[52px] w-full max-w-[281px] rounded-md p-4 transition-all hover:bg-[#CCFBF1] hover:text-[#7C7C7C] font-notoSans font-normal font-normal text-sm leading-5',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
      },

      size: {
        default: 'h-10 px-8 py-4',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
