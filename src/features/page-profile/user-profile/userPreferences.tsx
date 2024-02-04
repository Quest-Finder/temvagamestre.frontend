import React from 'react'
import { UserPreference } from '.'
import { userMock } from '../mocks/mock'
import { Badge, RPGStyle } from '../types/user'
interface UserPreferenceCompoenteProps{
  rpgStyle?: RPGStyle[]
  badges?: Badge[]

}
export default function UserPreferenceomponet({
  rpgStyle = userMock.preferences.rpgStyles,
  badges = userMock.badges
}:UserPreferenceCompoenteProps) {
  return (
    <UserPreference.Root>
      <UserPreference.Typography
        as='h1'
        className='mb-4 text-2xl text-neutral-950'
      >
        Estilos preferidos
      </UserPreference.Typography>
      <UserPreference.CardCategory rpgStyle={rpgStyle} />
      <UserPreference.Typography
        as='h1'
        className='mb-4 text-2xl text-neutral-950'
      >
        Conquistas
      </UserPreference.Typography>
      <UserPreference.CardBadge badges={badges} />
    </UserPreference.Root>
  )
}
