import type { Meta, StoryObj } from '@storybook/react'
import { PlayerProfileGraph } from '../PlayerProfileGraph'
import { MockGraphLegend } from '../mock'

const meta: Meta<typeof PlayerProfileGraph> = {
  title: 'PlayerProfileSection/PlayerProfileGraph',
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
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PlayerProfileGraph>

const template: Story = {
  render: args => <PlayerProfileGraph {...args} />,
}

export const Graph: Story = {
  ...template,
}

export const GraphWith2Items: Story = {
  ...template,
  args: {
    graphData: [
      {
        description: 'Interpretação',
        value: 2,
        id: '2',
      },
      {
        description: 'Dungeon',
        value: 5,
        id: '3',
      },
    ],
  },
}

export const GraphWith1Item: Story = {
  ...template,
  args: {
    graphData: [
      {
        description: 'Dungeon',
        value: 5,
        id: '3',
      },
    ],
  },
}
