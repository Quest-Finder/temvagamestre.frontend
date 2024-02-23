import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> { }
export function CheckComponent({ ...props }: SvgComponentProps) {
    return (
        <svg
            width={18}
            height={13}
            viewBox='0 0 18 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M6.55 13L.85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13z'
                fill='#095658'
            />
        </svg>
    )
}