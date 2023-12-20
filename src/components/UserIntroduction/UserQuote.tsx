interface UserQuoteProps {
  children: string
}

export function UserQuote({ children }: UserQuoteProps) {
  return (
    <q className='block text-center text-zinc-500 empty:hidden sm:h-12 sm:text-xl sm:leading-10'>
      {children}
    </q>
  )
}
