import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}
export function ArrowBack({ ...props }: SvgComponentProps) {
  return (
    <svg
      width='11'
      height='18'
      viewBox='0 0 11 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10.3627 2.225L8.87936 0.75L0.637695 9L8.8877 17.25L10.3627 15.775L3.5877 9L10.3627 2.225Z'
        fill='#989898'
      />
    </svg>
  )
}
