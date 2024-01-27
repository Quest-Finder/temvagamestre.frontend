interface PlayerProfileRootProps {
  children: React.ReactNode
}

export function PlayerProfileRoot({ children }: PlayerProfileRootProps) {
  return <section className="tablet:px-10">{children}</section>
}
