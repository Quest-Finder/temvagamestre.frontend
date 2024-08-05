import type { Meta, StoryObj } from '@storybook/react'

import { PlayerProfileGraphLegend } from '../components/PlayerProfileGraphLegend'
import { MockGraphLegend } from '../mock'

const meta: Meta<typeof PlayerProfileGraphLegend> = {
  title: 'PlayerProfileSection/PlayerProfileGraphLegend ',
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
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PlayerProfileGraphLegend>

const template: Story = {
  render: args => <PlayerProfileGraphLegend {...args} />,
}

export const GraphLegend: Story = {
  ...template,
}

export const GraphLegendWith2Items: Story = {
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

export const GraphLegendWith1Items: Story = {
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
