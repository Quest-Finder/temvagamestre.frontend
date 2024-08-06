import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card'

import { UserIntroduction } from '.'
import { UserIntroductionMock } from './mock'

const meta: Meta<typeof UserIntroduction> = {
  title: 'Profile Page/UserIntroduction',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1776-4508&mode=design&t=iN2EgkutdijNumqg-0',
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserIntroduction>

export const Introduction: Story = {
  render: () => (
    <UserIntroduction.Section>
      <UserIntroduction.SectionTitle title='Bio' />
      <Card className='flex flex-col gap-4 rounded-2xl border-neutral-200 px-4 py-6'>
        <UserIntroduction.Bio
          description={UserIntroductionMock.user.info.bio}
        />
      </Card>
    </UserIntroduction.Section>
  ),
}
