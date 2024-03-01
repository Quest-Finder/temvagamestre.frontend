'use client'

import { SocialNetworkText } from './SocialNetworkText'

interface SocialNetworkToggleInputProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string
}

export function SocialNetworkToggleInput({
  text,
  id,
  ...rest
}: SocialNetworkToggleInputProps) {
  return (
    <div className='flex items-center justify-center gap-2'>
      <label
        htmlFor={id}
        className='relative inline-flex cursor-pointer items-center outline-none'
        {...rest}
      >
        <input
          type='checkbox'
          id={id}
          className='peer sr-only outline-none'
        />
        <div className='h-6 w-11 cursor-pointer rounded-xl bg-[#E2E8F0] transition-all  peer-checked:bg-[#0F172A] peer-focus:outline-none peer-focus:ring-[#0F172A]' />
        <span className='absolute left-1 top-[2px]  z-10 h-5 w-5 rounded-full bg-[#FFFFFF] shadow-md transition-all peer-checked:left-5' />
      </label>
      {text && <SocialNetworkText text={text} />}
    </div>
  )
}
