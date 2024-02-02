import { Instagram } from 'lucide-react'
import React from 'react'

export function BoxWithIcons() {
  return (
    <section className='flex items-center justify-center gap-3'>
      {Array.from({ length: 5 }, (_, i) => i + 1).map(icon => {
        return (
          <div className='flex h-11 w-11 items-center justify-center rounded-md bg-black'>
            <Instagram stroke='white' />
          </div>
        )
      })}
    </section>
  )
}
