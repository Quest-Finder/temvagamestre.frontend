import { cn } from '@/lib/utils'
import { ElementType } from 'react'

interface InputIconProps extends React.SVGProps<SVGSVGElement> {
  icon: ElementType
}

export function InputIcon({ icon: Icon, className, ...props }: InputIconProps) {
  return (
    <Icon
      className={cn('absolute right-4 top-1/2 -translate-y-1/2', className)}
      {...props}
    />
  )
}
