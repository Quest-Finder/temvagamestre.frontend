import { cn } from '@/lib/utils'

interface FormTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function FormTitle({ className, children, ...props }: FormTitleProps) {
  return (
    <h1
      className={cn('mb-4 text-[32px] text-neutral-950', className)}
      {...props}
    >
      {children}
    </h1>
  )
}