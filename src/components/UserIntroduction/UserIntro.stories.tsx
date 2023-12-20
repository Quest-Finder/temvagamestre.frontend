import type { Meta, StoryObj } from '@storybook/react'
import { UserIntroduction } from './UserIntroduction'

const meta: Meta<typeof UserIntroduction> = {
  title: 'Exemple/UserIntro1',
  component: UserIntroduction,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-h-none max-w-4xl rounded-xl border-2 px-4 py-6 sm:px-6'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1776-4508&mode=design&t=iN2EgkutdijNumqg-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof UserIntroduction>

export const Intro: Story = {
  render: () => <UserIntroduction />,
}
