import { Button } from '@/components/ui/button'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  comp?: React.ComponentType
}
export function SubmitButton({ text, comp, ...props }: Props) {
  const renderChildComponent = () => {
    if (!comp) return null
    return React.createElement(comp)
  }
  return (
    <Button
      type='submit'
      className=' min-h-[3.5rem] w-full min-w-[6.25rem] max-w-[13.375rem] flex-wrap px-8 py-4'
      {...props}
    >
      {text ?? 'Salvar e Continuar'}
      {renderChildComponent()}
    </Button>
  )
}
