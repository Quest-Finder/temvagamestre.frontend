/* eslint-disable import/no-extraneous-dependencies */

import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'

export default {
  title: 'Ui/ Avatar',
  component: Avatar,
  subcomponents: {
    Avatar,
    AvatarImage,
    AvatarFallback,
  },
  tags: ['auto-docs'],
} as Meta

export const AvatarDefault: StoryObj = {
  render: () => (
    <Avatar>
      <AvatarImage
        src='https://github.com/shadcn.png'
        alt='@shadcn'
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}
