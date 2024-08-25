import { IconType } from 'react-icons'

interface IconProps {
  IconName: IconType | null
}

export function Icon({ IconName }: IconProps) {
  return (
    IconName && (
      <IconName className='box-content min-h-8 min-w-8 cursor-pointer items-center justify-center gap-2 rounded-md bg-neutral-950 p-2 transition-all delay-75 hover:bg-neutral-900' />
    )
  )
}
