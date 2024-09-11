export const AUTH_PREFIX = '/auth'
const REGISTER_PREFIX = '/register'

export const AUTH_ROUTES = {
  SIGN_IN: `${AUTH_PREFIX}/sign-in`,
  SIGN_UP: `${AUTH_PREFIX}/sign-up`,
  SOCIAL_CALLBACK: `/api/${AUTH_PREFIX}/social-callback`,
} as const

export const REGISTER_PLAYER_ROUTES = {
  ONBOARDING: `${REGISTER_PREFIX}/onboarding`,
  PLAYER: `${REGISTER_PREFIX}/player`,
} as const

export const APP_ROUTES = {
  DASHBOARD: '/dashboard',
}
