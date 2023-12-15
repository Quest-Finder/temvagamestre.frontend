import type { Meta, StoryObj } from '@storybook/react'
import { PlayerGraph } from './PlayerGraph'

const meta: Meta<typeof PlayerGraph> = {
  title: 'PlayerGraph',
  component: PlayerGraph,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

export default meta

type Story = StoryObj<typeof PlayerGraph>

export const Graph: Story = {
  render: () => <PlayerGraph />,
}
