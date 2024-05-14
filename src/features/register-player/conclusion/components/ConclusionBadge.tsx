import Image from 'next/image'
import Badge from '@/assets/images/InsigneaDoDestino.png'

export function ConclusionBadge() {
  return (
    <div className='size-[10.288rem] rounded-full bg-gradient-to-b from-secondary-600 to-secondary-300 p-3'>
      <Image
        src={Badge}
        alt='Badge Insígnia do Destino'
      />
    </div>
  )
}
