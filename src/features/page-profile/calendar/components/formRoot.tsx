import React, { FormHTMLAttributes } from 'react'

interface RootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}
export function FormRoot({ children, ...rest }: RootProps) {
  return (
    <form
      {...rest}
      className='flex w-full'
    >
      {children}
    </form>
  )
}
