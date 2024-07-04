import { cn } from '@/lib/utils'
import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

function Search({ className, ...props }: SvgComponentProps) {
  return (
    <svg
      width={18}
      height={18}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={cn(className)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.26 10.27L17.99 16l-1.49 1.49-5.73-5.73C9.7 12.53 8.41 13 7 13a6.5 6.5 0 116.5-6.5c0 1.41-.47 2.7-1.24 3.77zM7 2C4.51 2 2.5 4.01 2.5 6.5S4.51 11 7 11s4.5-2.01 4.5-4.5S9.49 2 7 2z'
        fill='#000'
      />
    </svg>
  )
}

export default Search
