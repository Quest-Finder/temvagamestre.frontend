import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
}

export function Skeleton({
  className,
  quantity = 1,
  ...props
}: Readonly<SkeletonProps>) {
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
            'animate-pulse rounded-lg bg-foreground-soft/25',
            className,
          )}
          {...props}
        />
      ))}
    </>
  )
}

/* USAGE

  <Skeleton quantity={5} />

*/
