import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface PatternOverlayProps extends ComponentProps<'div'> {
  variant?: 'elements' | 'gem-stars'
  darkColor?: boolean
}

export function PatternOverlay({
  variant = 'elements',
  darkColor,
  className,
  ...props
}: PatternOverlayProps) {
  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 right-0 top-0 opacity-10',
        variant === 'elements' && 'pattern-elements',
        variant === 'gem-stars' && 'pattern-gem-stars',
        darkColor && 'invert',
        className,
      )}
      {...props}
    />
  )
}

/* USAGE

  <PatternOverlay
    variant="elements | gem-stars"
    darkColor
    {...props}
  />

*/
