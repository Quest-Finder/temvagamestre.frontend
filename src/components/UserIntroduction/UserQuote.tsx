interface UserQuoteProps {
  userQuote: string
}

export function UserQuote({ userQuote }: UserQuoteProps) {
  return <q>{userQuote}</q>
}
