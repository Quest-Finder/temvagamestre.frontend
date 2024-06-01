import { cn } from '@/lib/utils'

interface FormTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string
}

export function FormTitle({ className, children, ...props }: FormTitleProps) {
  return (
    <h1
      className={cn('mb-4 text-center text-[32px] text-neutral-950 font-semibold max-w-[46.023rem] mx-auto leading-none', className)}
      {...props}
    >
      {children}
    </h1>
  )
}
export function FormTitleSkeleton() {
  return (
    <div
      className={cn(
        'mx-auto my-8 mb-4 h-8 w-full max-w-[900px] animate-pulse rounded-2xl bg-gray-200',
      )}
    />
  )
}
