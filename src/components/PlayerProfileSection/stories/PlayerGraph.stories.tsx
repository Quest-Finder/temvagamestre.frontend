import type { Meta, StoryObj } from '@storybook/react'
import { PlayerProfileGraph } from '../PlayerProfileGraph'
import { MockGraphLegend } from '../mock'

const meta: Meta<typeof PlayerProfileGraph> = {
  title: 'PlayerProfileGraph',
  component: PlayerProfileGraph,
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

type Story = StoryObj<typeof PlayerProfileGraph>

export const Graph: Story = {
  render: args => <PlayerProfileGraph {...args} />,
}
