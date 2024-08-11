import { Eye, EyeOff } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface ShowAndHideButtonProps extends ComponentProps<'button'> {
  title: string
  show: boolean
}

export function ShowAndHideButton({
  title,
  show,
  className,
  ...props
}: Readonly<ShowAndHideButtonProps>) {
  return (
    <button
      type='button'
      className={cn(
        'absolute right-1 top-1 flex size-8 items-center justify-center rounded-md text-foreground-soft ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {show ? (
        <EyeOff className='size-5 shrink-0' />
      ) : (
        <Eye className='size-5 shrink-0' />
      )}
      <span className='sr-only'>{title}</span>
    </button>
  )
}
