interface UserTitleProps {
  userName: string
  userRole: string
  userClass: string
}

export function UserTitle({ userName, userClass, userRole }: UserTitleProps) {
  return <h1>{`${userRole} ${userName} | ${userClass}`}</h1>
}
