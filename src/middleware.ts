import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import { isAuthenticated } from './actions/auth'
import { AUTH_PREFIX } from './constants/routes'

const isPublicRoute = createRouteMatcher([
  '/',
  `/api(.*)`,
  `${AUTH_PREFIX}(.*)`,
])

export default clerkMiddleware(
  async (auth, request) => {
    const isPrivateRoute = !isPublicRoute(request)
    const isUserAuthenticated = await isAuthenticated()

    if (!isUserAuthenticated && isPrivateRoute) auth().redirectToSignIn()
  },
  // Enable terminal logs
  // { debug: true },
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
