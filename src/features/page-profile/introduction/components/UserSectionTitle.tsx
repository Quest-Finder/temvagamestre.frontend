import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface UserSectionTitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  title: string
}

const Title = cva('text-2xl text-neutral-950 h-10 leading-[3rem] sm:h-8 w-full')

export function UserSectionTitle({ title, className }: UserSectionTitleProps) {
  return <h2 className={cn(Title({ className }))}>{title}</h2>
}
