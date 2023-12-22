interface UserQuoteProps {
  text: string
}

export function UserQuote({ text }: UserQuoteProps) {
  return (
    <q className='block text-center text-zinc-500 empty:hidden sm:h-12 sm:text-xl sm:leading-10'>
      {text}
    </q>
  )
}
