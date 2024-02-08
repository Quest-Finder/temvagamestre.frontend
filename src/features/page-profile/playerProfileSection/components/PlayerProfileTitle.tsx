interface SectionTitleProps {
  title: string
}

export function PlayerProfileTitle({ title }: SectionTitleProps) {
  return <h2 className='mb-4 text-2xl text-neutral-950'>{title}</h2>
}
