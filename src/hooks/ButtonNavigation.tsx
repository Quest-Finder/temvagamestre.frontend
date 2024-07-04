'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface BtnProps extends ButtonProps {
  href: string
  content: string
}
export default function ButtonNavigation({
  href,
  content,
  ...props
}: BtnProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push(href)
  }
  return (
    <Button
      onClick={handleClick}
      {...props}
    >
      {content}
    </Button>
  )
}
