interface UserSectionProps {
  children: React.ReactNode
}

export function UserSection({ children }: UserSectionProps) {
  return <section className='flex flex-col gap-4 sm:mt-6'>{children}</section>
}
