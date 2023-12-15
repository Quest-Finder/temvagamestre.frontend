import type { Meta, StoryObj } from '@storybook/react'
import { GraphLegend } from './GraphLegend'
import { MockGraphLegend } from './mock'

const meta: Meta<typeof GraphLegend> = {
  title: 'GraphLegend ',
  component: GraphLegend,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

export default meta

type Story = StoryObj<typeof GraphLegend>

export const Graph: Story = {
  render: () => <GraphLegend legendList={MockGraphLegend} />,
}
