'use client'

import { useEffect, useState } from 'react'

interface WindowSize {
  windowWidth: number
}

const useWindowWidth = (): WindowSize => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(prevWidth => {
      const newWidth = window.innerWidth
      if (prevWidth !== newWidth) {
        return newWidth
      }
      return prevWidth
    })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    windowWidth,
  }
}

export default useWindowWidth