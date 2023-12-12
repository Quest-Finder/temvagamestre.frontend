interface UserSectionProps {
  children: React.ReactNode
}

export function UserSection({ children }: UserSectionProps) {
  return <section>{children}</section>
}
