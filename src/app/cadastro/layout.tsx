import { FormLayout } from '@/features/register-player/player-registration/FormLayout'
import { auth, clerkClient } from '@clerk/nextjs/server'

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { userId } = auth().protect()

  const user = await clerkClient.users.getUser(userId)

  if (!user) return null
  return <FormLayout>{children}</FormLayout>
}
