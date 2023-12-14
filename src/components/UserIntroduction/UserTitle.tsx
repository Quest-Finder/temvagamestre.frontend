interface UserTitleProps {
  userName: string
  userRole: string
  userNickname: string
}

export function UserTitle({
  userName,
  userNickname,
  userRole,
}: UserTitleProps) {
  return (
    <h1 className='mb-4 text-center text-2xl'>
      <span className='font-bold'>{`${userRole} ${userName} |`}</span>
      {` `}
      {`${userNickname}`}
    </h1>
  )
}
