import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'
import { UserIntroduction } from '.'

const meta: Meta<typeof UserIntroduction> = {
  title: 'Profile Page/UserIntroduction',
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
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserIntroduction>

export const Introduction: Story = {
  render: () => (
    <>
      <UserIntroduction.UserTitle
        userName='Rodrigo'
        userNickname='Elfo experiente'
        userRole='Mestre'
      />
      <Separator />
      <UserIntroduction.Quote>Alguma frase muito legal</UserIntroduction.Quote>
      <UserIntroduction.Section>
        <UserIntroduction.SectionTitle title='Bio' />
        <UserIntroduction.Bio
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          earum perferendis asperiores itaque culpa ratione nihil optio,
          temporibus omnis doloremque dolor consequuntur, accusamus suscipit
          labore quisquam, eum laudantium dolorum explicate. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Praesentium soluta ipsa, porro
          eos, corporis suscipit laborum quibusdam quod voluptates, dolorem
          nulla ipsum magnam eum facilis ullam. Laudantium excepturi natus rem!'
        />
      </UserIntroduction.Section>
    </>
  ),
}
