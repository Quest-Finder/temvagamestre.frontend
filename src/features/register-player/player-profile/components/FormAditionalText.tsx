import { cn } from '@/lib/utils'

interface FormAditionalTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function FormAditionalText({ className, children, ...props }: FormAditionalTextProps) {
  return (
    <h1
      className={cn('mb-4 text-base text-neutral-600 text-center', className)}
      {...props}
    >
      {children}
    </h1>
  )
}