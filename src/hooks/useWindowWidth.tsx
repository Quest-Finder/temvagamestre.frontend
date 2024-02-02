'use client'

import { useState, useEffect } from 'react'

interface WindowDimensions {
  width: number
  height: number
}

export default function useWindowDimensions(width: number) {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const isWidthMobile: boolean = windowDimensions.width <= width
  return { windowDimensions, isWidthMobile }
}
