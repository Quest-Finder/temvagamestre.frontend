import type { Meta, StoryObj } from '@storybook/react'

import UserPreferenceComponent, {
  UserPreferenceCompoenteProps,
} from '@/features/page-profile/user-preference/userPreferences'

import { userMock } from '../../mocks/mock'
import { UserPreference } from '..'

export default {
  title: 'Preferências do usuário/UserPreferenceComponent',
  component: UserPreferenceComponent,
} as Meta<UserPreferenceCompoenteProps>

export const Template: StoryObj = {
  render: () => (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='max-w-[400px]'>
        <UserPreference.Root>
          <UserPreference.Typography as='h1'>
            Estilos preferidos
          </UserPreference.Typography>
          <UserPreference.CardCategory
            rpgStyle={userMock.preferences.rpgStyles}
          />
        </UserPreference.Root>
        <UserPreference.Root>
          <UserPreference.Typography as='h1'>
            Conquistas
          </UserPreference.Typography>
          <UserPreference.CardBadge badges={userMock.badges} />
        </UserPreference.Root>
      </div>
    </div>
  ),
}
export const EstilosPreferidos: StoryObj = {
  render: () => (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='max-w-[400px]'>
        <UserPreference.Root>
          <UserPreference.Typography as='h1'>
            Estilos preferidos
          </UserPreference.Typography>
          <UserPreference.CardCategory
            rpgStyle={userMock.preferences.rpgStyles}
          />
        </UserPreference.Root>
      </div>
    </div>
  ),
}

export const Conquistas: StoryObj = {
  render: () => (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='max-w-[400px]'>
        <UserPreference.Root>
          <UserPreference.Typography as='h1'>
            Conquistas
          </UserPreference.Typography>
          <UserPreference.CardBadge badges={userMock.badges} />
        </UserPreference.Root>
      </div>
    </div>
  ),
}
