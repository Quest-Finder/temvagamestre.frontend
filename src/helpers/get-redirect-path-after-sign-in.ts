import { ROUTES } from '@/constants'

interface GetRedirectPathAfterSignInProps {
  onboarding: boolean
  redirectPath?: string | null
}

export function getRedirectPathAfterSignIn({
  onboarding,
  redirectPath,
}: GetRedirectPathAfterSignInProps) {
  const appPath = redirectPath ?? ROUTES.dashboard.overview
  const pathToRedirect = onboarding ? ROUTES.register.onboarding : appPath

  return pathToRedirect
}
