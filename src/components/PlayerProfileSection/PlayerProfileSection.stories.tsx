import type { Meta, StoryObj } from '@storybook/react'
import { PlayerProfileSection } from './PlayerProfileSection'

const meta: Meta<typeof PlayerProfileSection> = {
  title: 'PlayerProfileSection',
  component: PlayerProfileSection,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

export default meta

type Story = StoryObj<typeof PlayerProfileSection>

export const ProfileSection: Story = {
  render: () => <PlayerProfileSection />,
}
