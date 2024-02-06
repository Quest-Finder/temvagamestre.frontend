import { Instagram } from 'lucide-react'
import React from 'react'
import facebook from '@/assets/social-medias/facebook.svg'
import instagram from '@/assets/social-medias/instagram.svg'
import reedit from '@/assets/social-medias/reedit.svg'
import tiktok from '@/assets/social-medias/tiktok.svg'
import whatsapp from '@/assets/social-medias/whatsapp.svg'
import Image from 'next/image'

const socialMedia = [
  tiktok,
  instagram,
   facebook,
   whatsapp,
   reedit
  ]
export function BoxWithIcons() {
  return (
    <section className='flex items-center justify-center gap-3'>
      {socialMedia.map((icon)=>(
        <div className='flex h-11 w-11 items-center justify-center rounded-md bg-black p-3'>
          <Image src={icon} alt='' width={100} height={100} quality={100} />
       </div>
      ))}
    </section>
  )
}
