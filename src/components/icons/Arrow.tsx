import React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

export function Arrow({ ...props }: SvgComponentProps) {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.0832 7.0002L8.49186 2.40888C8.10097 2.018 8.10097 1.38425 8.49186 0.99336C8.88274 0.602474 9.51649 0.602474 9.90738 0.99336L16.2071 7.29309C16.5976 7.68361 16.5976 8.31678 16.2071 8.7073L9.90738 15.007C9.51649 15.3979 8.88274 15.3979 8.49186 15.007C8.10097 14.6161 8.10097 13.9824 8.49186 13.5915L13.0832 9.0002H1.5C0.947715 9.0002 0.5 8.55248 0.5 8.0002C0.5 7.44791 0.947715 7.0002 1.5 7.0002H13.0832Z'
        fill='white'
      />
    </svg>
  )
}
