interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className='mb-4 text-2xl'>{title}</h2>
}
