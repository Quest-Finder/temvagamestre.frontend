import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([])
/**
 * If you want to block one or more routes
 * const isProtectedRoute = createRouteMatcher(['/cadastro(.*)'])
 */

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
