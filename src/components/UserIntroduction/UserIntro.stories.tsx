import type { Meta, StoryObj } from '@storybook/react'
import { UserIntroduction } from './UserIntroduction'

const meta: Meta<typeof UserIntroduction> = {
  title: 'Exemple/UserIntro1',
  component: UserIntroduction,
  decorators: [
    Story => (
      <div className='m-4 max-h-none max-w-4xl rounded-xl border-2 p-6'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1306-4387&mode=design&t=1c3IVi2qXvIsaMTm-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof UserIntroduction>

export const Intro: Story = {
  render: () => <UserIntroduction />,
}
