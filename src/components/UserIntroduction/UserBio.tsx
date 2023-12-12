interface UserBioProps {
  bioDescription: string
}

export function UserBio({ bioDescription }: UserBioProps) {
  return <p>{bioDescription}</p>
}
