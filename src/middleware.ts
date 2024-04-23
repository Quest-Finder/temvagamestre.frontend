import { authMiddleware } from '@clerk/nextjs'
import { publicRoutes } from './services/routers'

export default authMiddleware({
  publicRoutes,
})

// Redireciona todas as URLs que não terminam com uma extensão de arquivo e não começam com `_next` para a raiz do site
// Redireciona todas as URLs que começam com `/api` ou `/trpc` para a raiz do site
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
