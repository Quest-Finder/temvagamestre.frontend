import React from 'react'
import { UserPreference } from '.'
import { Badge, RPGStyle } from './types'

export interface UserPreferenceCompoenteProps {
  rpgStyle: RPGStyle[]
  badges: Badge[]
}

export default function UserPreferenceCategorys({
  rpgStyle,
  badges,
}: UserPreferenceCompoenteProps) {
  return (
    <>
      <UserPreference.Root>
        <UserPreference.Typography as='h1'>
          Estilos preferidos
        </UserPreference.Typography>
        <UserPreference.CardCategory rpgStyle={rpgStyle} />
      </UserPreference.Root>
      <UserPreference.Root>
        <UserPreference.Typography as='h1'>
          Conquistas
        </UserPreference.Typography>
        <UserPreference.CardBadge badges={badges} />
      </UserPreference.Root>
    </>
  )
}
