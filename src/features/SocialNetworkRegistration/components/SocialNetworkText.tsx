import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ElementType } from 'react'

const textVariants = cva('font-normal text-sm antialiased', {
  variants: {
    variant: {
      default: 'text-neutral-300 ',
      secondary: 'text-[#000000] uppercase',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
interface SocialNetworkTextProps extends VariantProps<typeof textVariants> {
  text: string
  element?: ElementType
  className?: string
}

export function SocialNetworkText({
  text,
  element = 'p',
  className,
  variant,
}: SocialNetworkTextProps) {
  const Text = element
  return (
    <Text className={cn(textVariants({ variant, className }))}>{text}</Text>
  )
}
