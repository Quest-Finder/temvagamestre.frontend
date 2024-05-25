import { Button } from '@/components/ui/button'
import useNavigation from '@/hooks/useNavigate'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  router: string
}
export default function ReplyBtnLatter({ router, ...props }: ButtonProps) {
  const navigate = useNavigation(router)
  return (
    <Button
      onClick={navigate}
      variant='ghost'
      size='lg'
      type='button'
      className=''
      {...props}
    >
      Prefiro responder em outro momento
    </Button>
  )
}
