import type { Meta, StoryObj } from '@storybook/react'
import { GraphLegend } from './GraphLegend'
import { MockGraphLegend } from './mock'

const meta: Meta<typeof GraphLegend> = {
  title: 'GraphLegend ',
  component: GraphLegend,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1685-5758&mode=design&t=oa2qNVMr0cRRhAkf-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof GraphLegend>

export const Graph: Story = {
  render: () => <GraphLegend legendList={MockGraphLegend} />,
}
