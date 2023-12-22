import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'
import { UserIntroduction } from '.'
import { UserIntroductionMock } from './mock'

const meta: Meta<typeof UserIntroduction> = {
  title: 'Profile Page/UserIntroduction',
  decorators: [
    Story => (
      <div className='max-h-none max-w-[862px] rounded-xl border-2 px-4 py-6 sm:px-6'>
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
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserIntroduction>

export const FullIntroduction: Story = {
  render: () => (
    <>
      <UserIntroduction.UserTitle
        userName={UserIntroductionMock.user.first_name}
        userNickname={UserIntroductionMock.user.nickname}
        userRole={UserIntroductionMock.user.role}
      />
      <Separator className='hidden sm:block' />
      <UserIntroduction.Quote text={UserIntroductionMock.user.info.quote} />
      <UserIntroduction.Section>
        <UserIntroduction.SectionTitle title='Bio' />
        <UserIntroduction.Bio
          description={UserIntroductionMock.user.info.bio}
        />
      </UserIntroduction.Section>
    </>
  ),
}

export const MissingIntroduction: Story = {
  render: () => (
    <>
      <UserIntroduction.UserTitle
        userName={UserIntroductionMock.user.first_name}
        userRole='Jogador'
      />
      <Separator />
      <UserIntroduction.Section>
        <UserIntroduction.SectionTitle title='Bio' />
        <UserIntroduction.Bio
          description={UserIntroductionMock.user.info.bio}
        />
      </UserIntroduction.Section>
    </>
  ),
}
