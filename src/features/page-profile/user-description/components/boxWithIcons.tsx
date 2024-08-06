import React, { ElementType } from 'react'

import Discord from '@/components/icons/discord'
import FacebookIcon from '@/components/icons/facebookIcon'
import { InstagramIcon } from '@/components/icons/instagram'
import ReeditIcon from '@/components/icons/reeditIcon'
import XIcon from '@/components/icons/xIcon'

const socialMedia: ElementType[] = [
  InstagramIcon,
  XIcon,
  Discord,
  FacebookIcon,
  ReeditIcon,
]
export function BoxWithIcons() {
  return (
    <section className='flex flex-wrap items-center justify-center gap-3'>
      {socialMedia.map(icon => {
        const IconName = icon
        return (
          <button key={new Date().getTime() * Math.random()}>
            <IconName className='h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-neutral-950 p-2 transition-all delay-75 hover:bg-neutral-900' />
          </button>
        )
      })}
    </section>
  )
}
