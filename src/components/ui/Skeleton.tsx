import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
  height: number | string
  width: number | string
}

export function Skeleton({
  className,
  quantity = 1,
  height,
  width,
  ...props
}: SkeletonProps) {
  const skeletonNumber = Array.from(
    { length: quantity },
    (_, index) => index + 1,
  )

  return (
    <>
      {skeletonNumber.map(index => (
        <div
          key={index}
          className={cn(
            'animate-pulse rounded-md bg-neutral-200',
            `h-${height}`,
            `w-${width}`,
            className,
          )}
          {...props}
        />
      ))}
    </>
  )
}
