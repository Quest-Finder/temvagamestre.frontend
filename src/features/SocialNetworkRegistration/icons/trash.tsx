import * as React from 'react'
interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

export function TrashIcon({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={18}
      height={20}
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16 5l-.867 12.142A2 2 0 0113.138 19H4.862a2 2 0 01-1.995-1.858L2 5m5 4v6m4-6v6m1-10V2a1 1 0 00-1-1H7a1 1 0 00-1 1v3M1 5h16'
        stroke='#545F71'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
