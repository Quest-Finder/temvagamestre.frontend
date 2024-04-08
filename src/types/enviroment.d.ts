import { z } from 'zod'

const envVariables = z.object({
  NEXT_PUBLIC_API_CIDADES_URL: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
