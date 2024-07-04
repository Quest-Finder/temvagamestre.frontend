import { cn } from '@/lib/utils'

interface ConclusionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function ConclusionTitle({
  children,
  className,
  ...props
}: ConclusionTitleProps) {
  return (
    <h1
      className={cn('text-3xl font-medium text-neutral-950', className)}
      {...props}
    >
      {children}
    </h1>
  )
}
