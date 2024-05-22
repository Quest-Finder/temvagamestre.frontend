import React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

export function NotValid({ ...props }: SvgComponentProps) {
  return (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.50027 6.5V8.16667M8.50027 11.5H8.50861M2.72677 14.8333H14.2738C15.5568 14.8333 16.3587 13.4444 15.7172 12.3333L9.94365 2.33333C9.30215 1.22222 7.6984 1.22222 7.0569 2.33333L1.28339 12.3333C0.641894 13.4444 1.44377 14.8333 2.72677 14.8333Z'
        stroke='#B91C1C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
