import Link from 'next/link'

interface Props {
  content: string
  href: string
}

export function ButtonSkipForm({ content, href }: Props) {
  return (
    <Link
      href={href}
      className=' rounded-md; order-none flex h-[3.25rem] w-[17.5625rem] flex-none grow-0 flex-row items-center justify-center gap-2.5 p-4 hover:bg-[#CCFBF1]'
    >
      <span className=' e h-5 text-sm font-normal not-italic leading-5 text-[#7C7C7C]'>
        {content}
      </span>
    </Link>
  )
}
