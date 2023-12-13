interface UserQuoteProps {
  children: string
}

export function UserQuote({ children }: UserQuoteProps) {
  return (
    <q className='mb-6 block text-center text-xl leading-loose text-zinc-500'>
      {children}
    </q>
  )
}
