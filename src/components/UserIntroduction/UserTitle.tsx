interface UserTitleProps {
  userName: string
  userRole: string
  userClass: string
}

export function UserTitle({ userName, userClass, userRole }: UserTitleProps) {
  return (
    <h1 className='mb-4 text-center text-2xl'>
      <span className='font-bold'>{`${userRole} ${userName} |`}</span>
      {` `}
      {`${userClass}`}
    </h1>
  )
}
