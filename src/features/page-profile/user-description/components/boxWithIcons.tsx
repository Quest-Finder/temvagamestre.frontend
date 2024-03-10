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
    <section className='flex items-center justify-center gap-3'>
      {socialMedia.map(icon => {
        const IconName = icon
        return (
          <IconName className='my-auto flex h-10 w-10 items-center justify-center gap-2 rounded-md bg-[#222222] p-2' />
        )
      })}
    </section>
  )
}
