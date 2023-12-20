interface UserTitleProps {
  userName: string
  userRole: string
  userNickname?: string
}

export function UserTitle({
  userName,
  userNickname,
  userRole,
}: UserTitleProps) {
  return (
    <h1 className='text-center text-xl sm:mb-4 sm:text-2xl'>
      <span className='font-bold'>
        {`${userRole} ${userName}`}
        {userNickname && ` | `}
      </span>
      {`${userNickname}`}
    </h1>
  )
}
