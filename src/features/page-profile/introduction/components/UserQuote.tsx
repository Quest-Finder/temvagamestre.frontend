interface UserQuoteProps {
  text: string
}

export function UserQuote({ text }: UserQuoteProps) {
  return (
    <q className='mt-2 block text-center leading-[1.125rem] text-neutral-400 empty:hidden sm:mt-0 sm:h-12 sm:text-xl sm:leading-[3rem]'>
      {text}
    </q>
  )
}
