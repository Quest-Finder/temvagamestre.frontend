import type { Meta, StoryObj } from '@storybook/react'
import { UserInformation } from './UserInformation'
import { Separator } from '../ui/separator'

const meta: Meta<typeof UserInformation> = {
  title: 'Exemple/UserIntro',
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
      url: 'https://www.figma.com/file/0NbHKoUNsH7gssqSRbAq1n/Tem-vaga-mestre%3F?type=design&node-id=1776-4508&mode=design&t=iN2EgkutdijNumqg-0',
    },
  },
}

export default meta

type Story = StoryObj<typeof UserInformation>

const template: Story = {
  render: () => (
    <>
      <UserInformation.UserTitle
        userName='Rodrigo'
        userNickname='Elfo experiente'
        userRole='Mestre'
      />
      <Separator />
      <UserInformation.Quote>Alguma frase muito legal</UserInformation.Quote>
      <UserInformation.Section>
        <UserInformation.SectionTitle title='Bio' />
        <UserInformation.Bio
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          earum perferendis asperiores itaque culpa ratione nihil optio,
          temporibus omnis doloremque dolor consequuntur, accusamus suscipit
          labore quisquam, eum laudantium dolorum explicate. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Praesentium soluta ipsa, porro
          eos, corporis suscipit laborum quibusdam quod voluptates, dolorem
          nulla ipsum magnam eum facilis ullam. Laudantium excepturi natus rem!'
        />
      </UserInformation.Section>
    </>
  ),
}

export const Intro: Story = {
  ...template,
}
