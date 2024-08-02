import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}
export function TikTokIcon({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={21}
      height={24}
      viewBox='0 0 21 24'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M15.072 0h-4.044v16.348c0 1.948-1.556 3.548-3.492 3.548s-3.491-1.6-3.491-3.548c0-1.913 1.52-3.478 3.388-3.548V8.696C3.319 8.766 0 12.139 0 16.348 0 20.59 3.388 24 7.57 24c4.184 0 7.572-3.444 7.572-7.652V7.965A9.366 9.366 0 0020.5 9.774V5.67c-3.042-.105-5.428-2.61-5.428-5.67z' />
    </svg>
  )
}
