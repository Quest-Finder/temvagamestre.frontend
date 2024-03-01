interface SocialNetworkRootProps {
  children: React.ReactNode
  asCol?: boolean
}
export function SocialNetworkBox({
  children,
  asCol = false,
}: SocialNetworkRootProps) {
  return (
    <div className={`flex w-full gap-4 ${asCol && 'flex-col'}`}>{children}</div>
  )
}
