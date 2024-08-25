'use client'

import { useRouter } from 'next/navigation'

import { Button, ButtonProps } from '@/components/ui/button'

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
