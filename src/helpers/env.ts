import z from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
})

const parsEnv = envSchema.safeParse(process.env)

if (!parsEnv.success) {
  console.error(
    'Invalid enviroment variables',
    parsEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid enviroment variables')
}

export const env = parsEnv.data
