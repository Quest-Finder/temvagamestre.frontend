import type { Meta, StoryObj } from '@storybook/react'
import { FormStepOne } from '@/features/register-player/player-registration/FormStepOne'

const meta: Meta<typeof FormStepOne> = {
  title: 'Register/FormSetpOne',
  component: FormStepOne,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=2654-2211&mode=design&t=nrfz9Ftjm3h2YK6K-0',
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FormStepOne>

const template: Story = {
  render: () => <FormStepOne />,
}

export const Form: Story = {
  ...template,
}
