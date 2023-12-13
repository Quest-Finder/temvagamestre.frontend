interface UserBioProps {
  children: string
}

export function UserBio({ children }: UserBioProps) {
  return <p className='text-xl leading-6 text-zinc-500'>{children}</p>
}
