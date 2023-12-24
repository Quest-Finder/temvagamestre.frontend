interface PlayerProfileRootProps {
  children: React.ReactNode
}

export function PlayerProfileRoot({ children }: PlayerProfileRootProps) {
  return <section>{children}</section>
}
