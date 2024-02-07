import { PlayerProfileData } from './interfaces'

export function totalPercentage(userData: PlayerProfileData[]) {
  const total = userData.reduce((soma, data) => soma + data.value, 0)
  return total
}
