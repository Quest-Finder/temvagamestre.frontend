import React from 'react'

interface Props {
    children: React.JSX.Element | React.JSX.Element[]
}
export default function Wrapper({ children }: Props) {
    return (
        <div
            className='flex items-center justify-center gap-4 h-16 px-1'
        >
            {children}
        </div>
    )
}
