import type { Meta, StoryObj } from '@storybook/react'
import { PlayerGraph } from './PlayerGraph'

const meta: Meta<typeof PlayerGraph> = {
  title: 'PlayerGraph',
  component: PlayerGraph,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1685-5758&mode=design&t=oa2qNVMr0cRRhAkf-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof PlayerGraph>

export const Graph: Story = {
  render: () => <PlayerGraph />,
}
