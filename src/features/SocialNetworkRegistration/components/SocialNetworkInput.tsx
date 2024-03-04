import { cn } from '@/lib/utils'
import React from 'react'
import { SocialNetworkText } from './SocialNetworkText'

interface SocialNetworkInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string
}
export const SocialNetworkInput = React.forwardRef<
  HTMLInputElement,
  SocialNetworkInput
>(({ className, text, type, ...props }, ref) => {
  return (
    <section className='flex items-center justify-center rounded-md border border-neutral-300 px-3 py-2 '>
      {text && <SocialNetworkText text={text} />}
      <input
        type={type}
        className={cn(
          'placeholder-text-neutral-300  w-full rounded-md text-neutral-800 outline-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    </section>
  )
})
