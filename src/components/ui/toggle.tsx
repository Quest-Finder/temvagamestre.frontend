import React from 'react'

import { Label } from './label'

function BackgroundToogle() {
  return (
    <div
      aria-hidden='true'
      className='h-6 w-11 cursor-pointer rounded-xl bg-[#E2E8F0] transition-all peer-checked:bg-[#0F172A] peer-focus:outline-none peer-focus:ring-[#0F172A]'
    />
  )
}
function ButtonToogle() {
  return (
    <span
      aria-hidden='true'
      className='absolute left-1 top-[2px] z-10 h-5 w-5 rounded-full bg-[#FFFFFF] shadow-md transition-all peer-checked:left-5'
    />
  )
}

interface ToogleLabelProps {
  fieldName: string
  children: React.ReactNode
}
function ToogleLabel({ fieldName, children }: ToogleLabelProps) {
  return (
    <Label
      className='relative inline-flex cursor-pointer items-center outline-none'
      htmlFor={fieldName}
    >
      {children}
    </Label>
  )
}

interface ToogleDescripriptionProps {
  text: string
}
function ToogleDescripription({ text }: ToogleDescripriptionProps) {
  return <p className='pl-2'>{text}</p>
}

export const Toogle = {
  BackgroundToogle,
  ButtonToogle,
  ToogleLabel,
  ToogleDescripription,
}
