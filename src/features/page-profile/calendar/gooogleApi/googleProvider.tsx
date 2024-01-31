'use client'

import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'

interface GooogleProviderProps {
  children: React.ReactNode
}
export default function GoogleProvider({ children }: GooogleProviderProps) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      {children}
    </GoogleOAuthProvider>
  )
}
