import { ChevronRight, Eraser } from 'lucide-react'
import React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import texts from '../../_locales/pt-BR.json'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

function Root({ className, ...props }: RootProps) {
  return (
    <footer
      className={cn('mt-auto flex gap-4', className)}
      {...props}
    />
  )
}

export function ClearButton({
  size,
  variant,
  ...props
}: Readonly<ButtonProps>) {
  const CLEAR_BUTTON_TEXT = texts.Profile.Form.buttons.clear

  return (
    <Button
      type='button'
      size={size ?? 'lg'}
      variant={variant ?? 'outline'}
      {...props}
    >
      {CLEAR_BUTTON_TEXT}
      <Eraser className='size-5' />
    </Button>
  )
}

export function SubmitButton({ type, size, ...props }: Readonly<ButtonProps>) {
  const SUBMIT_BUTTON_TEXT = texts.Profile.Form.buttons.submit

  return (
    <Button
      type={type ?? 'submit'}
      size={size ?? 'lg'}
      {...props}
    >
      {SUBMIT_BUTTON_TEXT}
      <ChevronRight className='size-6' />
    </Button>
  )
}

export const FormFooter = {
  Root,
  ClearButton,
  SubmitButton,
}
