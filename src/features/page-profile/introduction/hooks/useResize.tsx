import { useState, useEffect } from 'react'
import { resizeDelay } from '../helpers/resizeDelay'

export function useResize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {
    const resize = resizeDelay(() => {
      setSize([window.innerWidth, window.innerHeight])
    })

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return { width: size[0], height: size[1] }
}
