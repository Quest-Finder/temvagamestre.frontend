import { ElementType } from 'react'
import { SocialNetworkText } from './SocialNetworkText'

interface SocialNetworkIconProps extends React.SVGProps<SVGSVGElement> {
  icon: ElementType
  text?: string
}
export function SocialNetworkIcon({
  icon,
  text,
  ...rest
}: SocialNetworkIconProps) {
  const Icon = icon
  return (
    <div className='flex items-center gap-2 '>
      <Icon {...rest} />
      {text && <SocialNetworkText text={text} />}
    </div>
  )
}
