interface PlayerProfileRootProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function PlayerProfileRoot({
  children,
  className,
}: PlayerProfileRootProps) {
  return <section className={className}>{children}</section>
}
