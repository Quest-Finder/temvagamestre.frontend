import FacebookIcon from '@/components/icons/facebookIcon'
import { InstagramIcon } from '@/components/icons/instagram'
import ReeditIcon from '@/components/icons/reeditIcon'
import XIcon from '@/components/icons/xIcon'
import React, { ElementType } from 'react'

const socialMedia: ElementType[] = [
  InstagramIcon,
  XIcon,
  FacebookIcon,
  ReeditIcon,
]
export function BoxWithIcons() {
  return (
    <section className='flex flex-wrap items-center justify-center gap-3 '>
      {socialMedia.map(icon => {

        const IconName = icon
        const name = String(icon)
        return (
          <button
          >
            <IconName className='h-10  w-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-neutral-950 hover:bg-neutral-900 p-2 transition-all delay-75 transition-all' />
          </button>
        )
      })}
    </section>
  )
}
