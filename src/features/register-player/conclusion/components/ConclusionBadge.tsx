import Image from 'next/image'

import Badge from '@/assets/images/InsigneaDoDestino.png'

export function ConclusionBadge() {
  return (
    <div className='from-secondary-600 to-secondary-300 size-[10.288rem] rounded-full bg-gradient-to-b p-3'>
      <Image
        src={Badge}
        alt='Badge Insígnia do Destino'
      />
    </div>
  )
}
