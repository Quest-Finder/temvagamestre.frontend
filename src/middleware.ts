import { authMiddleware } from '@clerk/nextjs'

import { publicRoutes } from './services/routers'

export default authMiddleware({
  publicRoutes,
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
