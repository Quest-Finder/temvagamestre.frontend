import React, { FormHTMLAttributes, HtmlHTMLAttributes } from 'react'

interface RootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}
export function FormRoot({ children, ...rest }: RootProps) {
  return (
    <form
      {...rest}
      className='flex w-full'
      // className='mt-4 flex min-[1133px]:flex-row flex-col w-full items-center justify-center gap-3 tablet:justify-between'
    >
      {children}
    </form>
  )
}
