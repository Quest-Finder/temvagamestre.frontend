import { UserDescription } from '@/features/page-profile/user-description'

interface UserDescriptionComponentProps {
  username: string
  nickname: string
  pronomes: string
  description: string
  localization: string
  age: string
}
export default function UserDescriptionComponent({
  username,
  pronomes,
  description,
  localization,
  age,
  nickname,
}: UserDescriptionComponentProps) {
  return (
    <UserDescription.Root>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex flex-wrap items-end justify-center'>
          <UserDescription.Typography
            as='h2'
            className=' text-2xl font-semibold'
            content={username}
          />
          <UserDescription.Typography
            as='h2'
            className='text-xl font-semibold text-neutral-500'
            content={`(${pronomes})`}
          />
        </div>
        <UserDescription.Typography
          as='h2'
          className='text-neutral-500'
          content={`@${nickname}`}
        />
      </div>
      <UserDescription.BoxWithIcons />
      <UserDescription.Typography
        as='h2'
        className=' text-neutral-500 '
        content={`${description}`}
      />
      <UserDescription.Typography
        as='h3'
        className='text-neutral-400'
        content={`${localization}`}
      />
      <UserDescription.Typography
        as='h2'
        className='text-xl font-semibold text-black'
        content={age}
      />
    </UserDescription.Root>
  )
}
