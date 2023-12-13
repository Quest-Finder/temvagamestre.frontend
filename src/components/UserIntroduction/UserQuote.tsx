interface UserQuoteProps {
  children: string
}

export function UserQuote({ children }: UserQuoteProps) {
  return <q>{children}</q>
}
