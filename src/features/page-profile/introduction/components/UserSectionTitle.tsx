import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface UserSectionTitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  title: string
}

const Title = cva(
  'text-2xl font-semibold text-neutral-950 leading-7 w-full font-notoSans',
)

export function UserSectionTitle({ title, className }: UserSectionTitleProps) {
  return <h2 className={cn(Title({ className }))}>{title}</h2>
}
