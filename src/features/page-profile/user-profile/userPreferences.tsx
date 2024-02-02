import React from 'react'
import { UserPreference } from '.'
import { userMock } from '../mocks/mock'
export default function UserPreferenceomponet() {
  return (
    <UserPreference.Root>
      <UserPreference.Typography
        as='h1'
        className='mb-4 text-2xl text-neutral-950'
      >
        Estilos preferidos
      </UserPreference.Typography>
      <UserPreference.CardCategory rpgStyle={userMock.preferences.rpgStyles} />
      <UserPreference.Typography
        as='h1'
        className='mb-4 text-2xl text-neutral-950'
      >
        Conquistas
      </UserPreference.Typography>
      <UserPreference.CardBadge badges={userMock.badges} />
    </UserPreference.Root>
  )
}
