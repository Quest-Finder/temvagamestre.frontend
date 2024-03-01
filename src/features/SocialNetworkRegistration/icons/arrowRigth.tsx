import React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

export default function ArrowRigth({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.583 7L7.992 2.41A1 1 0 119.407.993l6.3 6.3a1 1 0 010 1.414l-6.3 6.3a1 1 0 11-1.415-1.415L12.583 9H1a1 1 0 010-2h11.583z'
        fill='#fff'
      />
    </svg>
  )
}
