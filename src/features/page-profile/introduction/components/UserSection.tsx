interface UserSectionProps {
  children: React.ReactNode
}

export function UserSection({ children }: UserSectionProps) {
  return <section className='space-y-4 md:mt-[3.25rem]'>{children}</section>
}
