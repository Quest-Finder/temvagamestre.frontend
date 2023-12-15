interface UserQuoteProps {
  children: string
}

export function UserQuote({ children }: UserQuoteProps) {
  return (
    <q className='block h-12 text-center text-xl leading-10 text-zinc-500 empty:hidden'>
      {children}
    </q>
  )
}
