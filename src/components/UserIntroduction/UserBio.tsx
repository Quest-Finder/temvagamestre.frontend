interface UserBioProps {
  children: string
}

export function UserBio({ children }: UserBioProps) {
  return <p>{children}</p>
}
