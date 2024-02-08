import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'
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

export const FullIntroduction: Story = {
  render: () => (
    <>
      <UserIntroduction.SectionTitle
        title='Bio'
        className='mb-4 block sm:hidden'
      />
      <Card className='flex max-w-[862px] flex-col rounded-xl border-[1px] px-4 py-6 sm:px-6 sm:pt-4'>
        <UserIntroduction.UserTitle
          userName={UserIntroductionMock.user.first_name}
          userNickname={UserIntroductionMock.user.nickname}
          userRole={UserIntroductionMock.user.role}
        />
        <Separator className='hidden sm:block' />
        <UserIntroduction.Quote text={UserIntroductionMock.user.info.quote} />
        <UserIntroduction.Section>
          <UserIntroduction.SectionTitle
            title='Bio'
            className='hidden sm:block'
          />
          <UserIntroduction.Bio
            description={UserIntroductionMock.user.info.bio}
          />
        </UserIntroduction.Section>
      </Card>
    </>
  ),
}

export const MissingIntroduction: Story = {
  render: () => (
    <Card className='flex max-w-[862px] flex-col rounded-xl border-[1px] px-4 py-6 sm:px-6 sm:pt-4'>
      <UserIntroduction.UserTitle
        userName={UserIntroductionMock.user.first_name}
        userRole='Jogador'
      />
      <Separator className='hidden sm:block' />
      <UserIntroduction.Section>
        <UserIntroduction.SectionTitle title='Bio' />
        <UserIntroduction.Bio
          description={UserIntroductionMock.user.info.bio}
        />
      </UserIntroduction.Section>
    </Card>
  ),
}
