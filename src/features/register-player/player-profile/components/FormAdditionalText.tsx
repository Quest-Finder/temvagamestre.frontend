import { cn } from '@/lib/utils'

interface FormAdditionalTextProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function FormAdditionalText({
  className,
  children,
  ...props
}: FormAdditionalTextProps) {
  return (
    <h1
      className={cn('mb-6 text-center text-base text-neutral-600', className)}
      {...props}
    >
      {children}
    </h1>
  )
}
