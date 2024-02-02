import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserDescription } from '.'
import { Card } from '@/components/ui/card'

export default function UserDescriptionComponent() {
  return (
    <>
      <Avatar className={cn('mb-14 flex h-36 w-36 -mt-24 mx-auto')}>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <UserDescription.Root>
        <UserDescription.BoxWithIcons />
        <Card
          className={cn('inline-flex items-center justify-center border-none')}
        >
          <UserDescription.Typography as='h2'>
            Lucas Marcelo
          </UserDescription.Typography>
          <Card className='inline-flex items-center justify-end border-none pb-px'>
            <UserDescription.Typography as='h2'>
              (Ele - Dele)
            </UserDescription.Typography>
          </Card>
        </Card>
        <UserDescription.Typography
          as='h3'
          className="font-['Noto Sans'] text-xl font-semibold leading-normal text-stone-500"
        >
          Mestre D&D com 15 anos de experiência
        </UserDescription.Typography>
        <UserDescription.Typography
          as='h3'
          className=" font-['Noto Sans'] text-center text-xl font-semibold leading-normal text-neutral-400"
        >
          São Paulo | Brasil
        </UserDescription.Typography>
        <UserDescription.Typography
          as='h2'
          className="font-['Noto Sans'] h-5 text-center text-xl font-semibold leading-normal text-black"
        >
          30 - 35 anos
        </UserDescription.Typography>
        <Button
          className={cn(
            'inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-teal-800 px-4 py-3 max-w-[415px]' ,
            
          )}
        >
          <UserDescription.Typography
            as='p'
            className="border-none bg-transparent font-['Inter'] text-base font-semibold leading-snug text-white"
          >
            Enviar Mensagem
          </UserDescription.Typography>
        </Button>
      </UserDescription.Root>
    </>
  )
}
