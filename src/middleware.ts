import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import { AUTH_PREFIX } from './constants/routes'

const isPublicRoute = createRouteMatcher(['/', `${AUTH_PREFIX}(.*)`])

export default clerkMiddleware(
  (auth, request) => {
    const isPrivateRoute = !isPublicRoute(request)
    if (!auth().userId && isPrivateRoute) auth().redirectToSignIn()
  },
  // Enable terminal logs when in development environment
  { debug: process.env.NODE_ENV === 'development' },
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
