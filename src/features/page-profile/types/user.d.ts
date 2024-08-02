type DayPeriod = {
  night: boolean
  morning: boolean
  afternoon: boolean
}

type Badge = {
  id: string
  name: string
  type: string
  description: string
  criteria: string
  icon: string
}

type RPGStyle = {
  id: string
  name: string
}

type SocialMedia = {
  id: string
  name: string
  link: string
}

type UserPreferences = {
  frequency: string
  activeType: string
  dayPeriod: DayPeriod
  playersRange: {
    minPlayers: number
    maxPlayers: number
  }
  rpgStyles: RPGStyle[]
}

type UserConfig = {
  allowMessage: boolean
}

export type User = {
  user: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
  }
  address: {
    country: string
    state: string
    city: string
  }
  badges: Badge[]
  preferences: UserPreferences
  socialMedias: SocialMedia[]
  config: UserConfig
}
