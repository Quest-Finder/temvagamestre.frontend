'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import useWindowDimensions from '@/hooks/useWindowWidth'
import { PublicRoutes } from '@/services/routers'

export default function useEnsureRouteParams() {
  const router = useRouter()
  const windowSize = useWindowDimensions()

  const searchParams = useSearchParams()
  type ShowElement = 'profile' | 'images' | 'dates' | null
  const showElement: ShowElement = searchParams.get('show') as ShowElement
  useEffect(() => {
    if (windowSize.width < 768 && !showElement) {
      router.push(`${PublicRoutes.PlayerProfile}?show=profile`)
    }
    if (windowSize.width > 768) {
      router.push(`${PublicRoutes.PlayerProfile}`)
    }
  }, [router, showElement, windowSize.width])

  return showElement
}
