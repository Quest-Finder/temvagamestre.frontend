interface UserSectionProps {
  children: React.ReactNode
}

export function UserSection({ children }: UserSectionProps) {
  return <section className='mt-6 flex flex-col gap-4'>{children}</section>
}
