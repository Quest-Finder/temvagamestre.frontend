import type { Meta, StoryObj } from '@storybook/react'
import { PlayerProfileSection } from '../PlayerProfileSection'

const meta: Meta<typeof PlayerProfileSection> = {
  title: 'PlayerProfileSection',
  component: PlayerProfileSection,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1776-4416&mode=design&t=iN2EgkutdijNumqg-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof PlayerProfileSection>

export const ProfileSection: Story = {
  render: () => <PlayerProfileSection />,
}
