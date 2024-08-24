import { cn } from '@/lib/utils'

interface UserSectionTitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  title: string
}

export function UserSectionTitle({ title, className }: UserSectionTitleProps) {
  return (
    <h2
      className={cn(
        'w-full text-2xl font-semibold leading-10 text-neutral-950 md:leading-8',
        className,
      )}
    >
      {title}
    </h2>
  )
}
