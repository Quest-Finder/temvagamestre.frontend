import type { LinkProps } from 'next/link'
import Link from 'next/link'

import { Button, type ButtonProps } from './button'

interface NavButtonProps extends ButtonProps {
  href: LinkProps['href']
  replace?: LinkProps['replace']
  scroll?: LinkProps['scroll']
  prefetch?: LinkProps['prefetch']
  // Ensure that "asChild" cannot be changed
  asChild?: never
}

export function NavButton({
  href,
  replace,
  scroll,
  prefetch,
  children,
  ...props
}: NavButtonProps) {
  return (
    <Button
      {...props}
      asChild
    >
      <Link
        href={href}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}
      >
        {children}
      </Link>
    </Button>
  )
}
