import type { Meta, StoryObj } from '@storybook/react'
import UserPreferenceComponent, {
  UserPreferenceCompoenteProps,
} from '@/features/page-profile/user-preference/userPreferences'

export default {
  title: 'UserPreferenceComponent',
  component: UserPreferenceComponent,
  decorators: [
    Story => {
      return <div className='mx-auto max-w-[400px]'>{Story()}</div>
    },
  ],
} as Meta<UserPreferenceCompoenteProps>

export const Primary: StoryObj<UserPreferenceCompoenteProps> = {}
