import { authMiddleware } from '@clerk/nextjs'

const publicRoutes = ['/', '/user/profile']

export default authMiddleware({
  publicRoutes,
})

export const config = {
  async redirects() {
    return [
      {
        source: '/((?!.+\\.[\\w]+$|_next).*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(api|trpc)(.*)',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
