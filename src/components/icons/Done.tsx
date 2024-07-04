import React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

export function Done({ ...props }: SvgComponentProps) {
  return (
    <svg
      width='18'
      height='13'
      viewBox='0 0 18 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.55 13.0001L0.849998 7.3001L2.275 5.8751L6.55 10.1501L15.725 0.975098L17.15 2.4001L6.55 13.0001Z'
        fill='white'
      />
    </svg>
  )
}
