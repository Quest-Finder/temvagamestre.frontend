import React, { ElementType, ReactNode } from 'react'

const sizeVariants = {
  xxs: 'text-xxs',
  base: 'text-base',
  xl: 'text-2xl',
} as const
type SizeVariant = keyof typeof sizeVariants
interface TextProps {
  as?: ElementType
  size?: SizeVariant
  className?: string
  children?: ReactNode
  color?: ''
  fontFamily?: 'font-roboto' | 'font-inter'
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'md',
  color = '',
  className = '',
  fontFamily = 'font-roboto',
  children,
  ...props
}) => {
  const baseClasses = ''
  const colorClasses = `${color}`

  const combinedClasses = `${baseClasses} ${className} ${colorClasses} ${fontFamily}`

  return (
    <Component
      className={combinedClasses}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Text

