import { cn } from '@/lib/utils'

interface FormTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function FormAditionalText({ className, children, ...props }: FormTitleProps) {
  return (
    <h1
      className={cn('mb-6 text-base text-neutral-600', className)}
      {...props}
    >
      {children}
    </h1>
  )
}