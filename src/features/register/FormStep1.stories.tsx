import type { Meta, StoryObj } from '@storybook/react'
import { FormSetpOne } from '@/features/register/FormStepOne'

const meta: Meta<typeof FormSetpOne> = {
  title: 'Register/FormStep1',
  component: FormSetpOne,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FormSetpOne>

const template: Story = {
  render: () => <FormSetpOne />,
}

export const Form: Story = {
  ...template,
}
