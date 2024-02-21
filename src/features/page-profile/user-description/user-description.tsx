import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
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
  age = '30 - 35 anos',
}: UserDescriptionComponentProps) {
  return (
    <>
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
          className="font-['Noto Sans'] text-stone-500 text-center text-xl font-semibold leading-normal"
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
          className="font-['Noto Sans'] text-black h-5 text-center text-xl font-semibold leading-normal"
        >
          {age}
        </UserDescription.Typography>
        <Button
          className={cn(
            'bg-teal-800 inline-flex h-12 w-full max-w-[415px] items-center justify-center gap-2.5 rounded-md px-4 py-3',
          )}
        >
          <UserDescription.Typography
            as='p'
            className="bg-transparent text-white border-none font-['Inter'] text-base font-semibold leading-snug"
          >
            Enviar Mensagem
          </UserDescription.Typography>
        </Button>
      </UserDescription.Root>
    </>
  )
}
