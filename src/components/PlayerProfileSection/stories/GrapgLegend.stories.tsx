import type { Meta, StoryObj } from '@storybook/react'
import { MockGraphLegend } from '@/components/PlayerProfileSection/mock'
import { PlayerProfileGraphLegend } from '../PlayerProfileGraphLegend'

const meta: Meta<typeof PlayerProfileGraphLegend> = {
  title: 'PlayerProfileGraphLegend ',
  component: PlayerProfileGraphLegend,
  args: {
    graphData: MockGraphLegend,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1776-4416&mode=design&t=iN2EgkutdijNumqg-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof PlayerProfileGraphLegend>

export const Graph: Story = {
  render: args => <PlayerProfileGraphLegend {...args} />,
}
