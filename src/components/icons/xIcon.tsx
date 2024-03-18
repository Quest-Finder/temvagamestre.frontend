import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

function XIcon({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={22}
      height={21}
      viewBox='0 0 22 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.326.904H20.7l-7.37 8.424L22 20.79h-6.789l-5.317-6.952L3.81 20.79H.434l7.883-9.01L0 .904h6.961l4.806 6.355 5.56-6.355zm-1.184 17.867h1.87L5.945 2.817H3.94l12.203 15.954z'
        fill='#fff'
      />
    </svg>
  )
}

export default XIcon
