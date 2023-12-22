interface UserSectionTitleProps {
  title: string
}

export function UserSectionTitle({ title }: UserSectionTitleProps) {
  return <h2 className='text-2xl'>{title}</h2>
}
