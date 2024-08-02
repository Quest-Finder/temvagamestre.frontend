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
    <h1 className='mb-2 text-center text-xl leading-none text-[#013032] sm:mb-4 sm:min-h-[38px] sm:text-2xl sm:leading-[3rem]'>
      <span className='font-bold'>
        {`${userRole} ${userName}`}
        {userNickname && ` | `}
      </span>
      {userNickname && `${userNickname}`}
    </h1>
  )
}
