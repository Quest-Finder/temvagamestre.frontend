interface UserQuoteProps {
  text: string
}

export function UserQuote({ text }: UserQuoteProps) {
  return (
    <q className='block text-center leading-[1.125rem] text-neutral-400 empty:hidden sm:h-12 sm:text-xl sm:leading-[3rem]'>
      {text}
    </q>
  )
}
