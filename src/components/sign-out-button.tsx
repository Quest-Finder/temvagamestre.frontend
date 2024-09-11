'use client'

import { signOut } from '@/actions/auth'

import { Button, type ButtonProps } from './ui/button'

export function SignOutButton(props: ButtonProps) {
  return (
    <Button
      onClick={() => signOut()}
      {...props}
    >
      sign-out
    </Button>
  )
}
