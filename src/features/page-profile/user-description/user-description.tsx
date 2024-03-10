import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { UserDescription } from '@/features/page-profile/user-description'

interface UserDescriptionComponentProps {
  username?: string
  pronomes?: string
  description?: string
  localization?: string
  age?: string
}
export default function UserDescriptionComponent({
  username = 'Lucas Marcelo',
  pronomes = 'Ele - Dele',
  description = 'Mestre D&D com 15 anos de experiência',
  localization = 'São Paulo | Brasil',
  age = '35 anos',
}: UserDescriptionComponentProps) {
  return (
    <div className='mb-8 w-full'>
      <Avatar className={cn('mx-auto -mt-24 mb-14 flex h-36 w-36')}>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>Profile</AvatarFallback>
      </Avatar>
      <UserDescription.Root>
        <UserDescription.BoxWithIcons />
        <Card
          className={cn('inline-flex items-center justify-center border-none')}
        >
          <UserDescription.Typography as='h2'>
            {username}
          </UserDescription.Typography>
          <Card className='inline-flex items-center justify-end border-none pb-px shadow-none'>
            <UserDescription.Typography as='h2'>
              ({pronomes})
            </UserDescription.Typography>
          </Card>
        </Card>
        <UserDescription.Typography
          as='h3'
          className="font-['Noto Sans'] text-center text-xl font-semibold leading-normal text-stone-500"
        >
          {description}
        </UserDescription.Typography>
        <UserDescription.Typography
          as='h3'
          className=" font-['Noto Sans'] text-center text-xl font-semibold leading-normal text-neutral-400"
        >
          {localization}
        </UserDescription.Typography>
        <UserDescription.Typography
          as='h2'
          className="font-['Noto Sans'] h-5 text-center text-xl font-semibold leading-normal text-black"
        >
          {age}
        </UserDescription.Typography>
      </UserDescription.Root>
    </div>
  )
}
