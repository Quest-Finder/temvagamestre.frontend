import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type NavLinkProps = LinkProps & Omit<ComponentProps<'a'>, 'href'>

export function NavLink({ ref, className, children, ...props }: NavLinkProps) {
  const baseClasses =
    'font-medium text-primary underline-offset-2 ring-offset-background transition-colors rounded dark:text-primary-soft'
  const hoverClasses =
    'hover:text-primary-hard hover:underline dark:hover:text-primary'
  const focusClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4'

  return (
    <Link
      legacyBehavior
      {...props}
    >
      <a
        ref={ref}
        className={cn(baseClasses, hoverClasses, focusClasses, className)}
      >
        {children}
      </a>
    </Link>
  )
}
